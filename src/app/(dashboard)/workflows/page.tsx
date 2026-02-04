// src/app/(dashboard)/workflows/page.tsx
import { Plus, MoreHorizontal, ArrowRight, Play, Clock, ShieldCheck } from "lucide-react";

const workflows = [
    {
        id: 1,
        name: "Expense Approval",
        steps: ["Manager", "Finance", "HR"],
        active: true,
        triggers: "New Invoice",
    },
    {
        id: 2,
        name: "New Hire Onboarding",
        steps: ["HR", "IT Dept"],
        active: false,
        triggers: "Candidate Offer",
    }
];

export default function WorkflowPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Workflows</h1>
                    <p className="text-slate-500 text-sm">Design and automate your approval processes.</p>
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-100">
                    <Plus size={18} /> Create Workflow
                </button>
            </div>

            {/* Workflow Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {workflows.map((wf) => (
                    <div key={wf.id} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${wf.active ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{wf.name}</h3>
                                    <p className="text-xs text-slate-400">Trigger: {wf.triggers}</p>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20} /></button>
                        </div>

                        {/* Visual Steps */}
                        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
                            {wf.steps.map((step, index) => (
                                <div key={index} className="flex items-center gap-3 shrink-0">
                                    <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">
                                        {step}
                                    </div>
                                    {index < wf.steps.length - 1 && <ArrowRight size={16} className="text-slate-300" />}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${wf.active ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                {wf.active ? "● Active" : "○ Draft"}
                            </span>
                            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                                Edit Flow <Play size={14} className="fill-current" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}