import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import File from "@/lib/models/File";
import FileVersion from "@/lib/models/FileVersion";
import { getPresignedUploadUrl } from "@/lib/s3";
import { MaximizeIcon } from "lucide-react";



export async function POST(req:Request){
    await connectDB();

    //authenticate the user through session
    const session = await getServerSession(authOptions)
    if(!session?.user?.id){
        return NextResponse.json(
            {error:"Unauthorized"},
            {status:401}
        )
    }

    const userId = session.user.id

    //read request body
    const {originalFileName, size, mimeType} = await req.json()

    if(!originalFileName || !size || !mimeType){
        return NextResponse.json(
            {error:"Missing required fields"},
            {status: 400}
        )
    }

    //check if the file already exists
    const existingFile = await File.findOne({
        ownerId: userId,
        originalName: originalFileName
    })

    // versioning
    let versionNumber:number;
    let fileId: string

    if(!existingFile){
        versionNumber = 1;
        const newFile = await File.create({
            ownerId:userId,
            originalName:originalFileName,
            latestVersion:versionNumber,
        });
        fileId = newFile._id.toString()
    }
    else{
        // versionNumber = existingFile.latestVersion + 1;
        // fileId = existingFile._id.toString()
        fileId = existingFile._id.toString();
        const maxVersionDoc = await FileVersion.findOne({fileId})
                                                .sort({versionNumber:-1})
                                                .select("versionNumber")

        versionNumber = maxVersionDoc?maxVersionDoc.versionNumber+1:1;
        await File.updateOne(
            {_id:fileId},
            {$set:{latestVersion:versionNumber}}
        )
    }

    const safeName = originalFileName.replace(/\s+/g, "_");
    const s3Key = `uploads/${userId}/${fileId}/v${versionNumber}_${safeName}`;

    await FileVersion.create({
        fileId,
        versionNumber,
        s3Key:"PENDING",
        size,
        mimeType
    })

    const uploadUrl = await getPresignedUploadUrl(s3Key,mimeType)

    return NextResponse.json({
        fileId,
        versionNumber,
        s3Key,
        uploadUrl
    })

}