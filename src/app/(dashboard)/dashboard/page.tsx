// src/app/(dashboard)/dashboard/page.tsx
import { FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const stats = [
    { label: "Total Requests", value: "124", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Pending", value: "12", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Approved", value: "98", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Rejected", value: "14", icon: AlertCircle, color: "text-rose-600", bg: "bg-rose-50" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Welcome back, Admin</h1>
                <p className="text-slate-500">Here's what's happening with your approvals today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section: Recent Requests & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg text-slate-900">Recent Requests</h3>
                        <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                    </div>

                    {/* Simple Table Placeholder */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-slate-400 text-sm border-b border-slate-50">
                                    <th className="pb-4 font-medium">Project</th>
                                    <th className="pb-4 font-medium">Status</th>
                                    <th className="pb-4 font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[1, 2, 3].map((i) => (
                                    <tr key={i} className="border-b border-slate-50 last:border-0">
                                        <td className="py-4 font-medium text-slate-700">Budget Approval Q1</td>
                                        <td className="py-4">
                                            <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-medium">Pending</span>
                                        </td>
                                        <td className="py-4 text-slate-500">Oct 24, 2023</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions / Activity Feed */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-6">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
                            Create New Workflow
                        </button>
                        <button className="w-full py-3 px-4 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                            Invite Team Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}