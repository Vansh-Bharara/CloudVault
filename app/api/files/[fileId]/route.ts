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
    {params} : {params:{fileId:string}}
){
    const {fileId} = await params;

    await connectDB();

    const session = await getServerSession(authOptions);
    if(!session?.user?.id){
        return NextResponse.json({error:"Unauthorized"},{status:401});
    }

    const ownerId = new mongoose.Types.ObjectId(session.user.id);
    const fileIdObject = new mongoose.Types.ObjectId(fileId);

    const file = await File.findOne({_id:fileIdObject,ownerId});
    if(!file){
        return NextResponse.json({error:"Forbidden"},{status:403});
    }

    const versions = await FileVersion.find({fileId});

    for(const v of versions){
        if(v.s3Key!=="PENDING"){
            await deleteS3Object(v.s3Key);
        }
    }

    await FileVersion.deleteMany({fileId});
    await File.deleteOne({_id:fileIdObject});

    return NextResponse.json({success:true});

}