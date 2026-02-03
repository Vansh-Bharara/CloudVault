import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import File from "@/lib/models/File";
import FileVersion from "@/lib/models/FileVersion";
import mongoose from "mongoose";


export async function POST(req: Request) {

    await connectDB();
    //session check
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.id

    const { fileId, versionNumber, s3Key } = await req.json()
    console.log('ok before req check 2')
    if (!fileId || !versionNumber || !s3Key) {
        return NextResponse.json({ error: "Missing fields required" }, { status: 403 })
    }
    //check the owner 
    const ownerObjectId = new mongoose.Types.ObjectId(userId)

    const file = await File.findOne({ _id: fileId, ownerId: ownerObjectId })
    if (!file) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    //finalize the version by chaning the pending s3 key to real s3 key in metadata
    const updated = await FileVersion.findOneAndUpdate({
        fileId,
        versionNumber,
        s3Key: "PENDING"
    },
        {
            $set: { s3Key }
        }
    )

    if (!updated) {
        return NextResponse.json({ error: "No pending version found" }, { status: 400 })
    }

    return NextResponse.json({ success: true })

}