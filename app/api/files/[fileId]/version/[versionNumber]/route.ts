import { authOptions } from "@/lib/auth";
import File from "@/lib/models/File";
import FileVersion from "@/lib/models/FileVersion";
import { connectDB } from "@/lib/mongodb";
import { deleteS3Object } from "@/lib/s3";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function DELETE(
    req:Request,
    {params}:{params:{fileId:string,versionNumber:string}}
){
    const {fileId} = await params;
    const {versionNumber} = await params;

    await connectDB();

    const session = await getServerSession(authOptions);

    if(!session?.user?.id){
        return NextResponse.json({error:"Unauthorized"},{status:401})
    }

    const ownerId = new mongoose.Types.ObjectId(session.user.id);
    const fileIdObject = new mongoose.Types.ObjectId(fileId);
    const versionNumberNum = Number(versionNumber);

    //check ownership
    const file = await File.findOne({_id:fileId,ownerId})
    if(!file){
        return NextResponse.json({error:"Forbidden"},{status:403});
    }

    const version = await FileVersion.findOne({fileId:fileIdObject,versionNumber:versionNumberNum});
    if(!version){
        return NextResponse.json({error:"Version Not Found"},{status:404});
    }

    //delete from s3
    if(version.s3Key!=="PENDING"){
        await deleteS3Object(version.s3Key);
    }

    //delete metadata
    await FileVersion.deleteOne({_id:version._id});

    //remaining versions check
    const remainingVersions = await FileVersion.find({fileId:fileIdObject})
    .sort({versionNumber:-1})
    .select("versionNumber");

    if(remainingVersions.length===0){
        //if there was only one version that is deleted hence delete file too 
        await File.deleteOne({_id:fileIdObject})
    }
    else{
        //update latestVersion if needed
        const highestVersion = remainingVersions[0].versionNumber;
        await File.updateOne(
            {_id:fileIdObject},
            {$set:{latestVersion:highestVersion}}
        )
    }

    return NextResponse.json({success:true});
}
