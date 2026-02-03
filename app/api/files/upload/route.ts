import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import File from "@/lib/models/File";



export async function POST(req:Request){
    await connectDB;

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
    let isNewFile: boolean;
    let fileId: string | null = null

    if(!existingFile){
        versionNumber = 1;
        isNewFile = true
    }
    else{
        versionNumber = existingFile.latestVersion + 1;
        isNewFile = false
        fileId = existingFile._id.toString()
    }

    return NextResponse.json({
        isNewFile,
        versionNumber,
        fileId
    })

}