"use client";

import { Mail, MoreHorizontal, Shield, UserPlus, Search } from "lucide-react";
import { useState } from "react";

const teamMembers = [
    { id: 1, name: "Ariful Islam", email: "arif@approvenexus.com", role: "Admin", status: "Active", avatar: "AI" },
    { id: 2, name: "Sarah Khan", email: "sarah@approvenexus.com", role: "Approver", status: "Active", avatar: "SK" },
    { id: 3, name: "Tanvir Ahmed", email: "tanvir@approvenexus.com", role: "Member", status: "Pending", avatar: "TA" },
    { id: 4, name: "Rifat Hasan", email: "rifat@approvenexus.com", role: "Approver", status: "Active", avatar: "RH" },
];

export default function TeamPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Team Members</h1>
                    <p className="text-slate-500 text-sm">Manage your team and their access roles.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-100">
                    <UserPlus size={18} />
                    Invite Member
                </button>
            </div>

            {/* Search & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                    />
                </div>
                <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl flex items-center justify-center">
                    <span className="text-indigo-700 font-bold mr-2">{teamMembers.length}</span>
                    <span className="text-indigo-600 text-sm font-medium">Total Members</span>
                </div>
                <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl flex items-center justify-center">
                    <span className="text-amber-700 font-bold mr-2">1</span>
                    <span className="text-amber-600 text-sm font-medium">Pending Invites</span>
                </div>
            </div>

            {/* Team Table */}
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50 border-b border-slate-100">
                            <tr className="text-slate-500 text-[11px] uppercase tracking-widest font-bold">
                                <th className="px-8 py-5">Member</th>
                                <th className="px-8 py-5">Role</th>
                                <th className="px-8 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {teamMembers.map((member) => (
                                <tr key={member.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                                                {member.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-800">{member.name}</div>
                                                <div className="text-xs text-slate-400 flex items-center gap-1">
                                                    <Mail size={12} /> {member.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Shield size={14} className="text-slate-400" />
                                            {member.role}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${member.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                                            }`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 hover:bg-white border border-transparent hover:border-slate-100 rounded-lg transition-all text-slate-400 hover:text-slate-600">
                                            <MoreHorizontal size={18} />
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