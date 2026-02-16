import { authOptions } from "@/lib/auth";
import File from "@/lib/models/File";
import FileVersion from "@/lib/models/FileVersion";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(
    req:Request,
    {params}:{params:{fileId:string,versionNumber:string}}
){

    const {fileId} = await params;
    const {versionNumber} = await params;

    await connectDB();

    //authenticate
    const session = await getServerSession(authOptions);
    if(!session?.user?.id){
        return NextResponse.json({error:"Unauthorized"},{status:401});
    }

    const ownerId = new mongoose.Types.ObjectId(session.user.id);
    const fileIdObject = new mongoose.Types.ObjectId(fileId);
    const versionNumberNum = Number(versionNumber);

    //check ownership
    const file = await File.findOne({_id:fileId,ownerId});

    //check if version exists
    const version = await FileVersion.findOne({
        fileId:fileIdObject,
        versionNumber:versionNumberNum
    })

    if(!version || version.s3Key==="PENDING"){
        return NextResponse.json(
            {error:"Invalid version"},
            {status:400}
        )
    }

    await File.updateOne(
        {_id:fileId},
        {$set : {latestVersion:versionNumberNum}}
    )

    return NextResponse.json({success:true})

}