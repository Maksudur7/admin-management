// src/components/dashboard/RequestModal.tsx
"use client";
import { useState } from "react";
import { X, Check, AlertCircle, Loader2 } from "lucide-react";
import { updateRequestStatus } from "@/src/lib/actions/approvals";
import { toast } from "sonner";

export default function RequestModal({ request, onClose }: { request: any, onClose: () => void }) {
    const [isPending, setIsPending] = useState(false);

    const handleAction = async (status: "APPROVED" | "REJECTED") => {
        setIsPending(true);
        const result = await updateRequestStatus(request.id, status);

        if (result.success) {
            toast.success(`Request ${status.toLowerCase()} successfully!`);
            onClose(); // Modal bondho hobe
        } else {
            toast.error("Something went wrong!");
        }
        setIsPending(false);
    };

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-full max-w-md bg-white h-full shadow-2xl p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h2 className="text-xl font-bold text-slate-800">Review Request</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20} /></button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Request Title</label>
                        <p className="text-lg font-semibold text-slate-900">{request.title}</p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-4">
                        <div className="flex justify-between">
                            <span className="text-sm text-slate-500">Requester</span>
                            <span className="text-sm font-medium text-slate-900">{request.requester.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-slate-500">Priority</span>
                            <span className="text-xs font-bold px-2 py-0.5 bg-rose-100 text-rose-600 rounded">{request.priority}</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="pt-10 space-y-3">
                        <button
                            disabled={isPending}
                            onClick={() => handleAction("APPROVED")}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-100"
                        >
                            {isPending ? <Loader2 className="animate-spin" /> : <Check size={20} />} Approve
                        </button>

                        <button
                            disabled={isPending}
                            onClick={() => handleAction("REJECTED")}
                            className="w-full bg-white border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-600 hover:text-rose-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                        >
                            <AlertCircle size={20} /> Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}