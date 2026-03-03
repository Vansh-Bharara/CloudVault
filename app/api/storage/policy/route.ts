import { authOptions } from "@/lib/auth";
import StoragePolicy from "@/lib/models/StoragePolicy";
import { connectDB } from "@/lib/mongodb";
import { updateUserLifecycleRule } from "@/lib/s3";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = new mongoose.Types.ObjectId(session.user.id);

    const policy = await StoragePolicy.findOne({ userId });
    if (!policy) {
        return NextResponse.json({
            enabled: false,
            archiveAfterDays: 30,
            deleteAfterDays: 90,
            storageClass: "GLACIER"
        });
    }

    return NextResponse.json(policy);
}

export async function POST(req: Request) {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = new mongoose.Types.ObjectId(session.user.id);

    let { enabled, archiveAfterDays, deleteAfterDays, storageClass } = await req.json();

    if (storageClass === "INTELLIGENT_TIERING") {
        archiveAfterDays = 0;
        deleteAfterDays = 0;
    }

    if (storageClass !== "INTELLIGENT_TIERING") {
        if (deleteAfterDays <= archiveAfterDays) {
            return NextResponse.json(
                { error: "Delete days must be greater than archive days",
                  daysValueError:true,    
                },
                { status: 400 }
            )
        }
    }

    const updated = await StoragePolicy.findOneAndUpdate({ userId },
        {
            enabled,
            archiveAfterDays,
            deleteAfterDays,
            storageClass,
        },
        { upsert: true, new: true } //new:true is used to return the updated document 
        //upsert is a combination of update and insert, if no document for that user id is found , it inserts it , if found it udpates it
    )

    await updateUserLifecycleRule({
        userId: userId.toString(),
        enabled,
        archiveAfterDays,
        deleteAfterDays,
        storageClass
    })

    return NextResponse.json(updated)
}