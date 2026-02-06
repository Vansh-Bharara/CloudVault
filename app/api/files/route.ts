import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import File from "@/lib/models/File";


export async function GET() {
    await connectDB();

    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const ownerId = new mongoose.Types.ObjectId(session.user.id);

    const files = await File.find({ ownerId })
        .sort({ updatedAt: -1 })
        .select("_id originalName latestVersion updatedAt")
        .lean()

    const result = files.map((f) => ({
        fileId: f._id.toString(),
        originalName: f.originalName,
        latestVersion: f.latestVersion,
        updatedAt: f.updatedAt
    }))

    return NextResponse.json(result)

}