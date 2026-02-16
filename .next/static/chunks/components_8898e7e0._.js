(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Navbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Navbar(param) {
    let { user } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-sm border-b border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 flex items-center justify-between h-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-gray-800",
                        children: "☁ Cloud File Manager"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        (user === null || user === void 0 ? void 0 : user.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: user.image,
                            alt: "User Avatar",
                            width: 32,
                            height: 32,
                            className: "rounded-full border"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700",
                            children: user === null || user === void 0 ? void 0 : user.name
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                    callbackUrl: "/"
                                }),
                            className: "px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/FileList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FileList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FileList() {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredFiles, setFilteredFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [versions, setVersions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedFileId, setExpandedFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
        } finally{
            setLoading(false);
        }
    }
    async function fetchVersions(fileId) {
        const res = await fetch("/api/files/".concat(fileId, "/versions"));
        if (!res.ok) return;
        const data = await res.json();
        setVersions(data);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileList.useEffect": ()=>{
            fetchFiles();
        }
    }["FileList.useEffect"], []);
    // client-side search (simple & acceptable)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileList.useEffect": ()=>{
            if (!query) {
                setFilteredFiles(files);
            } else {
                setFilteredFiles(files.filter({
                    "FileList.useEffect": (f)=>f.originalName.toLowerCase().includes(query.toLowerCase())
                }["FileList.useEffect"]));
            }
        }
    }["FileList.useEffect"], [
        query,
        files
    ]);
    async function handleDownloadLatest(fileId) {
        const res = await fetch("/api/files/".concat(fileId, "/download/latest"));
        if (!res.ok) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to get download URL");
            return;
        }
        const { url } = await res.json();
        window.open(url, "_blank");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 p-6 text-gray-600",
            children: "Loading files..."
        }, void 0, false, {
            fileName: "[project]/components/FileList.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    if (!filteredFiles.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "search",
                    className: "px-3 py-2 w-64 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mb-2",
                    value: query,
                    onChange: (e)=>setQuery(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 p-6 text-gray-500",
                    children: "No files yet."
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 overflow-hidden mt-4 py-2 px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "search",
                className: "px-3 py-2 w-64 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mb-2",
                value: query,
                onChange: (e)=>setQuery(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/FileList.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-gray-100",
                children: filteredFiles.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-12 items-center hover:bg-gray-50 transition cursor-pointer",
                                onClick: ()=>{
                                    const next = expandedFileId === f.fileId ? null : f.fileId;
                                    setExpandedFileId(next);
                                    if (next) fetchVersions(f.fileId);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-gray-800 truncate",
                                                title: f.originalName,
                                                children: f.originalName
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: new Date(f.updatedAt).toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-3 text-sm text-gray-500",
                                        children: [
                                            "Latest v",
                                            f.latestVersion
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-3 text-sm text-gray-500 truncate",
                                        children: "Show verions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 flex items-center justify-end gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleDownloadLatest(f.fileId);
                                            },
                                            className: "px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition cursor-pointer",
                                            children: "Download"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FileList.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            expandedFileId === f.fileId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 ml-4 border-l pl-4 space-y-2",
                                children: versions.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Version ",
                                                            v.versionNumber
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-400",
                                                        children: new Date(v.uploadedAt).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    fetch("/api/files/".concat(f.fileId, "/download/").concat(v.versionNumber)).then((res)=>res.json()).then((data)=>{
                                                        if (data.url) window.open(data.url, "_blank");
                                                    });
                                                },
                                                className: "px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition cursor-pointer",
                                                children: "Download"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this),
                                            v.versionNumber !== f.latestVersion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: async (e)=>{
                                                    e.stopPropagation();
                                                    const res = await fetch("/api/files/".concat(f.fileId, "/restore/").concat(v.versionNumber), {
                                                        method: 'POST'
                                                    });
                                                    if (res.ok) {
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Versions restored successfully");
                                                        await fetchFiles(); //refresh file list
                                                        await fetchVersions(f.fileId); //refresh versions
                                                    } else {
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Restore failed");
                                                    }
                                                },
                                                className: "px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600 transition",
                                                children: "Restore"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 200,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, v.versionNumber, true, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, f.fileId, true, {
                        fileName: "[project]/components/FileList.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FileList.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FileList.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
} // "use client";
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
_s(FileList, "30/yc47jVyk5Dj3tGeD0lQgoJWA=");
_c = FileList;
var _c;
__turbopack_context__.k.register(_c, "FileList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_8898e7e0._.js.map