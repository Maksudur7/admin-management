"use client"; // Sobar upore eta thaktei hobe

import { Search, Filter, ExternalLink } from "lucide-react";
import { useState } from "react";

// Dummy Data
const dummyRequests = [
    { id: "REQ-001", title: "Marketing Budget - Feb", requester: "Sarah Khan", priority: "High", status: "Pending", date: "Feb 04, 2026" },
    { id: "REQ-002", title: "Software License Renewal", requester: "Tanvir Ahmed", priority: "Medium", status: "Approved", date: "Feb 03, 2026" },
    { id: "REQ-003", title: "New Laptop Procurement", requester: "Rifat Hasan", priority: "Low", status: "Rejected", date: "Feb 01, 2026" },
];

const tabs = ["All", "Pending", "Approved", "Rejected"];

export default function RequestsPage() {
    const [activeTab, setActiveTab] = useState("All");

    // Filter logic for UI
    const filteredRequests = activeTab === "All"
        ? dummyRequests
        : dummyRequests.filter(req => req.status === activeTab);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Approval Requests</h1>
                    <p className="text-slate-500 text-sm">Review and manage all incoming requests.</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">
                    + New Request
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 w-fit rounded-2xl">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search requests..."
                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
                    <Filter size={16} /> Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr className="text-slate-500 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Request ID</th>
                                <th className="px-6 py-4 font-semibold">Title & Requester</th>
                                <th className="px-6 py-4 font-semibold">Priority</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredRequests.map((req) => (
                                <tr key={req.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4 text-sm font-medium text-indigo-600">#{req.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-semibold text-slate-800">{req.title}</div>
                                        <div className="text-xs text-slate-400">{req.requester}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${req.priority === "High" ? "bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-600"
                                            }`}>
                                            {req.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${req.status === "Approved" ? "bg-emerald-50 text-emerald-600" :
                                                req.status === "Pending" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${req.status === "Approved" ? "bg-emerald-600" :
                                                    req.status === "Pending" ? "bg-amber-600" : "bg-rose-600"
                                                }`} />
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{req.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-indigo-600">
                                            <ExternalLink size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}