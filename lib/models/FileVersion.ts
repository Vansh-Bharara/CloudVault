import mongoose, {Schema, models} from "mongoose";

const FileVersionSchema = new Schema({
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
    s3Key:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    },
    mimeType:{
        type:String,
        required:true,
    },
    uploadedAt:{
        type:Date,
        default:Date.now
    },
})

export default models.FileVersion ||
  mongoose.model("FileVersion", FileVersionSchema);