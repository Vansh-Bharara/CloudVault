import { authOptions } from "@/lib/auth";
import File from "@/lib/models/File";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import FileVersion from "@/lib/models/FileVersion";
import { getPresignedDownloadUrl } from "@/lib/s3";



export async function GET(
    req:Request,
    {params}:{params:{fileId:string}}
){
    const {fileId} = await params;
    await connectDB()

    //authenticate
    const session = await getServerSession(authOptions);
    if(!session?.user?.id){
        return NextResponse.json({error:"Unauthorized"},{status:401})
    }

    const ownerId = new mongoose.Types.ObjectId(session?.user?.id);
    //const fileId = new mongoose.Types.ObjectId(fileId);

    //check ownership 
    const file = await File.findOne({_id:fileId,ownerId});
    if(!file){
        return NextResponse.json({error:"Forbidden"},{status:403})
    }

    const version = await FileVersion.findOne({
        fileId,
        versionNumber:file.latestVersion
    })

    if(!version || version.s3Key === "PENDING"){
        return NextResponse.json(
            {error : "File not ready for download"},
            {status:400}
        )
    }

    //presigned download url
    const url = await getPresignedDownloadUrl(version.s3Key)

    return NextResponse.json({url})

}