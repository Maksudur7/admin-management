// src/components/shared/EmptyState.tsx
import { Inbox } from "lucide-react";

export default function EmptyState({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center p-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <Inbox size={32} />
            </div>
            <p className="text-slate-500 font-medium">{message}</p>
            <button className="mt-4 text-indigo-600 font-bold text-sm hover:underline">
                Create your first request
            </button>
        </div>
    );
}