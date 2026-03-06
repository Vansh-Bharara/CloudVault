"use client"
import { useCallback } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { Card, CardContent } from './ui/card'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { useState } from 'react'

export default function DragDropZone() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  async function uploadFile(file: File) {
    try {
      //gt the presigned url 
      setUploading(true)
      setProgress(0)
      const initRes = await fetch("/api/files/upload/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalFileName: file.name, size:file.size, mimeType:file.type}),
      });
      if (!initRes.ok) throw new Error("upload init failed");
      const {uploadUrl, s3Key, fileId, versionNumber} = await
      initRes.json()

       // 2) upload to S3 using XHR to track progress
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", uploadUrl);

        xhr.setRequestHeader("Content-Type", file.type);

        xhr.upload.onprogress = (ev) => {
          if (ev.lengthComputable) {
            setProgress(Math.round((ev.loaded / ev.total) * 100));
          }
        };

        xhr.onload = async () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve()
          }
          else {
            reject(new Error(" s3 Upload failed"));
          }
        };

        xhr.onerror = () => reject(new Error("s3 Upload error"));
        xhr.send(file);
      });

       //confirm the upload 
      const completeRes = await fetch('api/files/upload/complete',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          fileId,
          versionNumber,
          s3Key
        })
      })

      if(!completeRes.ok) throw new Error("Upload finalize failed")

      setProgress(100);
      setUploaded(true);
      toast("File uploaded successfully !")
    }
    catch (err: any) {
      alert("Upload error: " + (err?.message || err));
    }
    finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 600);
    }

  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      acceptedFiles.forEach(uploadFile)
    }
  }, [])

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    console.log(fileRejections)
    if (fileRejections.length > 0) {
      const tooManyFiles = fileRejections.find((fileRejection) => fileRejection.errors[0].code === "too-many-files")

      const fileTooLarge = fileRejections.find((fileRejection) => fileRejection.errors[0].code === "file-too-large")

      if (tooManyFiles) {
        console.log("reached too many files , now u should see toast")
        toast("You can only upload 5 files")
        console.log("saw ????")
      }
      if (fileTooLarge) {
        toast.error('File size is large , should be less than 5mb')
      }
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    maxFiles: 5,
    maxSize: 1024 * 1024 * 10,
    accept: {
      "image/*": [],
      "application/pdf": []
    }
  })

  return (
    <>
    <Card className={cn(
      "relative border-2 border-dashed transition-color duration-200 ease-in-out w-full h-64",
      isDragActive ? 'border-primary bg-primary/10 border-solid' : 'border-border hover:border-primary'
    )} {...getRootProps()}>
      <CardContent className='flex flex-col items-center justify-center h-full'>
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p>Drop the files here ...</p>) :
            (
              <div className='flex flex-col items-center justify-center h-full w-full'>
                <p>Drag 'n' drop some files here, or click to select files</p>
                <Button>Select Files</Button>
              </div>
            )
        }
      </CardContent>
    </Card>
    {uploading && (
      <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
        <div
          className="h-3 rounded-full bg-indigo-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    )}
    {uploaded && (
      <div className="mt-4 w-full rounded-md bg-green-600 px-4 py-3">
        <p className="text-sm font-medium text-white">
          ✅ File uploaded successfully!
        </p>
      </div>
    )}
    </>
  )
}