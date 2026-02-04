"use client";

import { User, Bell, Shield, Palette } from "lucide-react";

export default function SettingsPage() {
  const settingsOptions = [
    { icon: <User size={20} />, title: "Profile", desc: "Manage your personal information" },
    { icon: <Bell size={20} />, title: "Notifications", desc: "Configure how you receive alerts" },
    { icon: <Shield size={20} />, title: "Security", desc: "Update password and security settings" },
    { icon: <Palette size={20} />, title: "Appearance", desc: "Customize the theme and layout" },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm">Manage your account and application preferences.</p>
      </div>

      <div className="grid gap-4">
        {settingsOptions.map((item, index) => (
          <button
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-md transition-all text-left group"
          >
            <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-200">
        <button className="bg-rose-50 text-rose-600 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-rose-100 transition-colors">
          Sign Out
        </button>
      </div>
    </div>
  );
}