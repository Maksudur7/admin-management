// src/components/dashboard/RequestProgress.tsx
export default function RequestProgress({ current, total }: { current: number, total: number }) {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full mt-4">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">
                <span>Step {current} of {total}</span>
                <span>{Math.round(percentage)}% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}