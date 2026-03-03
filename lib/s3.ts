import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, GetBucketLifecycleConfigurationCommand, PutBucketLifecycleConfigurationCommand, DeleteBucketLifecycleCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Filter } from "lucide-react";

const region = process.env.AWS_REGION!
const bucket = process.env.S3_BUCKET_NAME!

if(!region || !bucket){
    throw new Error("Please set up AWS_REGION and S3_BUCKET_NAME in .env.local")
}

const s3 = new S3Client({
    region,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
})

export async function getPresignedUploadUrl(key:string, contentType:string,expiresIn = 900){
    const command = new PutObjectCommand({
        Bucket:bucket,
        Key:key,
        ContentType:contentType
    })
    const url = await getSignedUrl(s3, command, {expiresIn})
    return url
}

export async function getPresignedDownloadUrl(key:string, expiresIn = 900){
    const command = new GetObjectCommand({
        Bucket:bucket,
        Key:key
    })
    const url = await await getSignedUrl(s3,command,{expiresIn})
    return url
}

export async function deleteS3Object(key:string){
    const command = new DeleteObjectCommand({
        Bucket:bucket,
        Key:key
    })
    return s3.send(command)
}

export async function updateUserLifecycleRule({
    userId,
    enabled,
    archiveAfterDays,
    deleteAfterDays,
    storageClass,
}:{
    userId:string;
    enabled:boolean,
    archiveAfterDays:number,
    deleteAfterDays:number,
    storageClass:"GLACIER" | "STANDARD_IA" | "INTELLIGENT_TIERING"
}){
    const prefix = `uploads/${userId}`;
    const ruleId = `user-${userId}-lifecycle`;

    //get existing lifecycle config
    let existingRules: any[] = [];

    try{
        const current = await s3.send(
            new GetBucketLifecycleConfigurationCommand({
                Bucket:bucket
            })
        )
        existingRules = current.Rules || [];
    }
    catch(err:any){
        if(err.name!=="NoSuchLifecycleConfiguration"){
            throw err;
        }
    }

    //remove existing rules for this user
    const filteredRules = existingRules.filter(
        (rule)=>rule.ID!==ruleId
    )

    //if enabled add new rule 
    if(enabled){
        const rule:any = {
            ID:ruleId,
            Filter:{
                Prefix:prefix
            },
            Status:"Enabled",
        }
        if(storageClass==="INTELLIGENT_TIERING"){
            rule.Transitions = []
        }
        else{
            rule.Transitions = [
                {
                    Days:archiveAfterDays,
                    StorageClass: storageClass,
                },
            ]
            rule.Expiration = {
                Days:deleteAfterDays
            }
        }
        filteredRules.push(rule)
    }

    //[ush updated configuration
    if(filteredRules.length===0){
        await s3.send(
            new DeleteBucketLifecycleCommand({
                Bucket:bucket
            })
        )
        return;
    }
    await s3.send(
        new PutBucketLifecycleConfigurationCommand({
            Bucket:bucket,
            LifecycleConfiguration:{
                Rules:filteredRules
            }
        })
    )
}

