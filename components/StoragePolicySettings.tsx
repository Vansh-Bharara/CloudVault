"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function StoragePolicySettings() {
    const [loading, setLoading] = useState(true);
    const [enabled, setEnabled] = useState(false);
    const [archiveAfterDays, setArchiveAfterDays] = useState(30);
    const [deleteAfterDays, setDeleteAfterDays] = useState(90);
    const [storageClass, setStorageClass] = useState("GLACIER");
    const [daysError,setDaysError] = useState("")

    // Fetch existing policy
    useEffect(() => {
        async function fetchPolicy() {
            try {
                const res = await fetch("/api/storage/policy");
                const data = await res.json();

                 console.log("API POLICY:", data); 

                if (data) {
                    setEnabled(data.enabled);
                    setArchiveAfterDays(data.archiveAfterDays);
                    setDeleteAfterDays(data.deleteAfterDays);
                    setStorageClass(data.storageClass);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchPolicy();
    }, []);

    async function handleSave() {
        try {
            const res = await fetch("/api/storage/policy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    enabled,
                    archiveAfterDays,
                    deleteAfterDays,
                    storageClass,
                }),
            });

            if (!res.ok){
                const data = await res.json();
                console.log(data);
                if(data.daysValueError){
                    setDaysError(data.error);
                }
                throw new Error("Failed to update policy");
            }
            setDaysError("");
            toast("Storage policy updated successfully");
        } catch (err) {
            toast.error("Failed to update policy");
        }
    }

    if (loading) return <div>Loading policy...</div>;

    return (
        <div className="bg-white rounded-xl shadow p-6 max-w-xl mx-auto mt-6">
            <h2 className="text-lg font-semibold mb-4">
                Storage Retention Policy
            </h2>

            {/* Enable Toggle */}
            <div className="flex items-center gap-2 mb-4">
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => setEnabled(e.target.checked)}
                />
                <label>Enable Lifecycle Management</label>
            </div>

            {enabled && (
                <>
                    {/* Storage Class */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">
                            Storage Class
                        </label>
                        <select
                            value={storageClass}
                            onChange={(e) => setStorageClass(e.target.value)}
                            className="border rounded px-3 py-2 w-full"
                        >
                            <option value="GLACIER">Glacier</option>
                            <option value="STANDARD_IA">Standard-IA</option>
                            <option value="INTELLIGENT_TIERING">
                                Intelligent-Tiering
                            </option>
                        </select>
                    </div>

                    {/* Show archive + delete only if NOT Intelligent-Tiering */}
                    {storageClass !== "INTELLIGENT_TIERING" && (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm mb-1">
                                    Archive after (days)
                                </label>
                                <input
                                    type="number"
                                    value={archiveAfterDays}
                                    onChange={(e) =>
                                        setArchiveAfterDays(Number(e.target.value))
                                    }
                                    className="border rounded px-3 py-2 w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm mb-1">
                                    Delete after (days)
                                </label>
                                <input
                                    type="number"
                                    value={deleteAfterDays}
                                    onChange={(e) =>
                                        setDeleteAfterDays(Number(e.target.value))
                                    }
                                    className="border rounded px-3 py-2 w-full"
                                />
                            </div>
                        </>
                    )}

                    {storageClass === "INTELLIGENT_TIERING" && (
                        <p className="text-sm text-gray-500 mb-4">
                            Intelligent-Tiering automatically optimizes storage
                            based on access patterns. No manual transition
                            configuration required.
                        </p>
                    )}
                </>
            )}

            <button
                onClick={handleSave}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
                Save Policy
            </button>
            { 
              daysError && <p className="text-red-500">{daysError}</p>
            }
        </div>
    );
}
