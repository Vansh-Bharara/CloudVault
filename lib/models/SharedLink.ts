import { Share } from "lucide-react";
import mongoose, {Schema,models} from "mongoose"

export interface ISharedLink{
    token:string;
    fileId:Schema.Types.ObjectId;
    versionNumber:number;
    ownerId:Schema.Types.ObjectId;
    expiresAt:Date;
    revoked:boolean;
    createdAt:Date
}

const SharedLinkSchema = new Schema<ISharedLink>({
    token:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    fileId:{
        type:Schema.Types.ObjectId,
        ref:"File",
        required:true,
        index:true
    },
    versionNumber:{
        type:Number,
        required:true,
    },
    ownerId:{
        type:Schema.Types.ObjectId,
        required:true,
        index:true
    },
    expiresAt:{
        type:Date,
        required:true,
    },
    revoked:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default models.SharedLink || mongoose.model<ISharedLink>("SharedLink",SharedLinkSchema)