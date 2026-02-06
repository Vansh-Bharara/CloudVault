import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import {NextResponse } from "next/server";

import File from "@/lib/models/File";
import FileVersion from "@/lib/models/FileVersion";



export async function GET(req:Request, {params}:{params:{fileId:string}}){
    
    const {fileId} = await params;

    await connectDB();

    const session = await getServerSession(authOptions);  
    if(!session?.user?.id){
        return NextResponse.json({error:"Unauthorized"},{status:401});
    };

    const ownerId = new mongoose.Types.ObjectId(session.user.id);
    const fileObjectId = new mongoose.Types.ObjectId(fileId);
    
    const file = await File.findOne({_id:fileObjectId,ownerId});
    if(!file){
        return NextResponse.json({error:"Forbidden"},{status:403})
    };

    //fetch the versions
    const versions = await FileVersion.find({fileId}).sort()
              .select("versionNumber size mimeType uploadedAt")
              .lean()

    //send the response
    const result = versions.map((v)=>({
        versionNumber:v.versionNumber,
        size:v.size,
        mimeType:v.mimeType,
        uploadedAt:v.uploadedAt,
    }))

    return NextResponse.json(result);
}