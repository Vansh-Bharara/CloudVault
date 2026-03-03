import mongoose, { Schema, models } from "mongoose";
import { ISODateString } from "next-auth";

export interface IstoragePolicy {
    userId: Schema.Types.ObjectId;
    enabled: boolean;
    archiveAfterDays: number;
    deleteAfterDays: number;
    storageClass: "GLACIER" | "STANDARD_IA" | "INTELLIGENT_TIERING";
    createdAt: Date;
    updatedAt: Date;
}

const StoragePolicySchema = new Schema<IstoragePolicy>({
    userId: {
        type: Schema.Types.ObjectId,
        required:true,
        index:true,
        unique:true
    },
    enabled:{
        type:Boolean,
        default:false,
    },
    archiveAfterDays:{
        type:Number,
        default:30
    },
    deleteAfterDays:{
        type:Number,
        default:90
    },
    storageClass:{
        type:String,
        enum:["GLACIER", "STANDARD_IA","INTELLIGENT_TIERING"],
        default:"GLACIER"
    }
},
{timestamps:true}
)

export default models.StoragePolicy || mongoose.model<IstoragePolicy>("StoragePolicy",StoragePolicySchema);