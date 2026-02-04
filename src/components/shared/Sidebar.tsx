"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileCheck, GitBranch, Settings, Users, LogOut } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Approvals", icon: FileCheck, href: "/requests" },
  { name: "Workflows", icon: GitBranch, href: "/workflows" },
  { name: "Team", icon: Users, href: "/team" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            A
          </div>
          ApproveNexus
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                  ? "bg-indigo-50 text-primary font-medium"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-50">
        <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl cursor-pointer group transition-colors">
          <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold">
            JD
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-800">John Doe</p>
            <p className="text-[10px] text-slate-400 font-medium italic">Administrator</p>
          </div>
          <button className="p-2 text-slate-400 group-hover:text-rose-500 transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}