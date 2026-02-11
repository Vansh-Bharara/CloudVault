import { authOptions } from "@/lib/auth";
import File from "@/lib/models/File";
import FileVersion from "@/lib/models/FileVersion";
import { connectDB } from "@/lib/mongodb";
import { getPresignedDownloadUrl } from "@/lib/s3";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";




export async function GET(
    req:Request,
    {params}:{params:{fileId:string, versionNumber:string}}
){
    const {fileId,versionNumber} = await params;

    await connectDB()

    //authenticate
    const session = await getServerSession(authOptions);

    if(!session?.user?.id){
        return NextResponse.json({error:"Unauthorized"},{status:401});
    }

    const ownerIdObject = new mongoose.Types.ObjectId(session.user.id);
    // const fileIdObject = new mongoose.Types.ObjectId(fileId);
    const versionNumberParam = Number(params.versionNumber);

    //check the ownership
    const file = await File.findOne({
        _id:fileId,
        ownerId:ownerIdObject
    })
    if(!file){
        return NextResponse.json({error:"Forbidden"},{status:403});
    }

    const version = await FileVersion.findOne({
        fileId,
        versionNumber:versionNumberParam
    })

    if(!version || version.s3Key === "PENDING"){
        return NextResponse.json(
            {error:"Version not available"},
            {status:400}
        )
    }

    //generate url 
    const url = await getPresignedDownloadUrl(version.s3Key);

    return NextResponse.json({url});

}