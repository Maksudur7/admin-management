// src/app/(dashboard)/layout.tsx
// import Header from "@/components/shared/Header"; // Header pore banabo

import Sidebar from "@/src/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header section */}
        <header className="h-16 border-b border-border bg-white flex items-center px-8 justify-between sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-slate-700">System Overview</h2>
          <div className="flex items-center gap-4">
             <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
               New Request
             </button>
          </div>
        </header>

        {/* Dynamic content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}