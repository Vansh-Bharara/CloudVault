// lib/models/File.ts
import mongoose, { Schema } from "mongoose";

export interface IFile {
  ownerId: Schema.Types.ObjectId;
  originalName: string;
  latestVersion: number;
}

const FileSchema = new Schema<IFile>({
  ownerId:{
    type:Schema.Types.ObjectId,
    required:true,
    index:true,
  },
  originalName:{
    type:String,
    required:true,
  },
  latestVersion:{
    type:Number,
    default:0,
  },
}, {timestamps:true});

// Prevent model overwrite on hot reload
export default (mongoose.models.File as mongoose.Model<IFile>) ||
  mongoose.model("File", FileSchema);
