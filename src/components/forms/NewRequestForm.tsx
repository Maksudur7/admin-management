// src/components/forms/NewRequestForm.tsx
"use client";
import { useState } from "react";
import { Upload, X, FileText } from "lucide-react";
import { toast } from "sonner";

export default function NewRequestForm({ onClose }: { onClose: () => void }) {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        if (file) formData.append("attachment", file);

        // Ekhane apnar server action call hobe
        try {
            // simulate api call
            await new Promise(res => setTimeout(res, 2000));
            toast.success("Request submitted successfully!");
            onClose();
        } catch (err) {
            toast.error("Failed to submit request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900">Create New Request</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20} /></button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                        <label className="text-sm font-bold text-slate-700 block mb-2">Request Title</label>
                        <input
                            name="title" required
                            placeholder="e.g. Monthly Marketing Budget"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-bold text-slate-700 block mb-2">Attachment (PDF/Image)</label>
                        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer relative">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                            />
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                                    <Upload size={24} />
                                </div>
                                {file ? (
                                    <span className="text-sm font-medium text-indigo-600 flex items-center gap-1">
                                        <FileText size={16} /> {file.name}
                                    </span>
                                ) : (
                                    <>
                                        <p className="text-sm font-semibold text-slate-600">Click or drag to upload</p>
                                        <p className="text-xs text-slate-400">Max size 5MB</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg disabled:bg-slate-300 transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? "Submitting..." : "Send Request"}
                    </button>
                </form>
            </div>
        </div>
    );
}