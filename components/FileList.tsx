"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { toast } from "sonner";

type FileItem = {
  fileId: string;
  originalName: string;
  latestVersion: number;
  mimeType: string; // from latest version
  updatedAt: string;
};

type FileVersion = {
  versionNumber: number;
  size: number;
  mimeType: string;
  uploadedAt: string;
};

export default function FileList() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<FileItem[]>([]);
  const [versions, setVersions] = useState<FileVersion[]>([]);
  const [expandedFileId, setExpandedFileId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function fetchFiles() {
    try {
      setLoading(true);
      const res = await fetch("/api/files");
      if (!res.ok) throw new Error("Failed to fetch files");
      const data = await res.json();
      setFiles(data);
      setFilteredFiles(data);
    } catch (err) {
      console.error(err);
      setFiles([]);
      setFilteredFiles([]);
    } finally {
      setLoading(false);
    }
  }

  async function fetchVersions(fileId: string) {
    const res = await fetch(`/api/files/${fileId}/versions`);
    if (!res.ok) return;
    const data = await res.json();
    setVersions(data);
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  // client-side search (simple & acceptable)
  useEffect(() => {
    if (!query) {
      setFilteredFiles(files);
    } else {
      setFilteredFiles(
        files.filter((f) =>
          f.originalName.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, files]);

  async function handleDownloadLatest(fileId: string) {
    const res = await fetch(`/api/files/${fileId}/download/latest`);
    if (!res.ok) {
      toast.error("Failed to get download URL");
      return;
    }
    const { url } = await res.json();
    window.open(url, "_blank");
  }

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 p-6 text-gray-600">
        Loading files...
      </div>
    );
  }

  if (!filteredFiles.length) {
    return (
      <>
        <input
          type="text"
          placeholder="search"
          className="px-3 py-2 w-64 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mb-2"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 p-6 text-gray-500">
          No files yet.
        </div>
      </>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 overflow-hidden mt-4 py-2 px-3">
      {/* Search bar */}
      <input
        type="text"
        placeholder="search"
        className="px-3 py-2 w-64 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mb-2"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />

      <div className="divide-y divide-gray-100">
        {filteredFiles.map((f) => (
          <div key={f.fileId} className="px-4 py-3">
            {/* FILE ROW */}
            <div
              className="grid grid-cols-12 items-center hover:bg-gray-50 transition cursor-pointer"
              onClick={() => {
                const next =
                  expandedFileId === f.fileId ? null : f.fileId;
                setExpandedFileId(next);
                if (next) fetchVersions(f.fileId);
              }}
            >
              <div className="col-span-4">
                <div
                  className="font-medium text-gray-800 truncate"
                  title={f.originalName}
                >
                  {f.originalName}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(f.updatedAt).toLocaleString()}
                </div>
              </div>

              {/* File type */}
              <div className="col-span-3 text-sm text-gray-500">
                Latest v{f.latestVersion}
              </div>

              <div
                className="col-span-3 text-sm text-gray-500 truncate"
              >
                Show verions
              </div>

              {/* Actions */}
              <div className="col-span-2 flex items-center justify-end gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownloadLatest(f.fileId);
                  }}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>

            {/* VERSION LIST */}
            {expandedFileId === f.fileId && (
              <div className="mt-2 ml-4 border-l pl-4 space-y-2">
                {versions.map((v) => (
                  <div
                    key={v.versionNumber}
                    className="flex justify-between items-center text-sm text-gray-600"
                  >
                    <div>
                      <div>Version {v.versionNumber}</div>
                      <div className="text-xs text-gray-400">
                        {new Date(v.uploadedAt).toLocaleString()}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        fetch(`/api/files/${f.fileId}/download/${v.versionNumber}`)
                          .then(res => res.json())
                          .then(data => {
                            if (data.url) window.open(data.url, "_blank");
                          });
                      }}
                      className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition cursor-pointer"
                    >
                      Download
                    </button>
                    
                    {v.versionNumber!==f.latestVersion && (
                      <button 
                    onClick={async (e)=>{
                      e.stopPropagation();
                      const res = await fetch(`/api/files/${f.fileId}/restore/${v.versionNumber}`,
                        {method:'POST'}
                      )
                      if(res.ok){
                        toast("Versions restored successfully");
                        await fetchFiles() //refresh file list
                        await fetchVersions(f.fileId); //refresh versions
                      }
                      else{
                        toast.error("Restore failed")
                      }
                    }}
                    className="px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600 transition">
                      Restore
                    </button>
                    )}

                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";

// type FileItem = {
//   fileId: string;
//   originalName: string;
//   latestVersion: number;
//   updatedAt: string;
// };

// export default function FileList() {
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);

//   // modal-related state
//   const [modalFile, setModalFile] = useState<FileItem | null>(null);
//   const [versions, setVersions] = useState<any[]>([]);

//   async function fetchFiles() {
//     try {
//       setLoading(true);
//       const res = await fetch("/api/files");
//       if (!res.ok) throw new Error("Failed to fetch files");
//       const data = await res.json();
//       setFiles(data);
//     } catch (err) {
//       console.error(err);
//       setFiles([]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function fetchVersions(fileId: string) {
//     const res = await fetch(`/api/files/${fileId}/versions`);
//     if (!res.ok) return;
//     const data = await res.json();
//     setVersions(data);
//   }

//   useEffect(() => {
//     fetchFiles();
//   }, []);

//   // lock background scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = modalFile ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [modalFile]);

//   if (loading) {
//     return (
//       <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 p-6 text-gray-600">
//         Loading files...
//       </div>
//     );
//   }

//   if (!files.length) {
//     return (
//       <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 p-6 text-gray-500">
//         No files yet.
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* FILE LIST */}
//       <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 overflow-hidden mt-4 py-2 px-3">
//         <div className="divide-y divide-gray-100">
//           {files.map((f) => (
//             <div key={f.fileId} className="px-4 py-3">
//               <div
//                 className="grid grid-cols-12 items-center hover:bg-gray-50 transition cursor-pointer"
//                 onClick={async () => {
//                   await fetchVersions(f.fileId);
//                   setModalFile(f);
//                 }}
//               >
//                 <div className="col-span-6">
//                   <div className="font-medium text-gray-800 truncate">
//                     {f.originalName}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Updated: {new Date(f.updatedAt).toLocaleString()}
//                   </div>
//                 </div>

//                 <div className="col-span-3 text-sm text-gray-500">
//                   Latest v{f.latestVersion}
//                 </div>

//                 <div className="col-span-3 text-right text-sm text-blue-600">
//                   Show versions
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* MODAL */}
//       {modalFile && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setModalFile(null)}
//           />

//           {/* Modal box */}
//           <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl border border-gray-200 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-800 truncate">
//                 {modalFile.originalName}
//               </h2>
//               <button
//                 onClick={() => setModalFile(null)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="space-y-3 max-h-80 overflow-y-auto">
//               {versions.map((v) => (
//                 <div
//                   key={v.versionNumber}
//                   className="flex justify-between text-sm text-gray-600"
//                 >
//                   <span>Version {v.versionNumber}</span>
//                   <span>{new Date(v.uploadedAt).toLocaleString()}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

