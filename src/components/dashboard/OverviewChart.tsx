// src/components/dashboard/OverviewChart.tsx
"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Jan', approved: 40, rejected: 10 },
    { name: 'Feb', approved: 30, rejected: 15 },
    { name: 'Mar', approved: 55, rejected: 5 },
    { name: 'Apr', approved: 45, rejected: 8 },
    { name: 'May', approved: 60, rejected: 12 },
];

export default function OverviewChart() {
    return (
        <div className="h-[300px] w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Approval Performance</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="approved" fill="#4f46e5" radius={[4, 4, 4, 4]} barSize={30} />
                    <Bar dataKey="rejected" fill="#e2e8f0" radius={[4, 4, 4, 4]} barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}