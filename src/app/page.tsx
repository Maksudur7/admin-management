// src/app/page.tsx
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">A</div>
          ApproveNexus
        </div>
        <Link href="/login" className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-700 transition-all">
          Sign In
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 text-center sm:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <span className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Enterprise Ready
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Automate Your <br />
            <span className="text-indigo-600">Approval Workflow</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Streamline requests, manage multi-step approvals, and gain full visibility into your organization's processes with ApproveNexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* <Link href="/login" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Get Started Free <ArrowRight size={20} />
            </Link> */}
            <Link href="/dashboard" className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Get Started Free <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Feature Preview Card */}
        <div className="flex-1 w-full max-w-xl bg-slate-50 rounded-[40px] p-8 border border-slate-100 shadow-inner">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm space-y-2">
              <ShieldCheck className="text-indigo-600" size={32} />
              <h3 className="font-bold">Secure</h3>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm space-y-2">
              <Zap className="text-amber-500" size={32} />
              <h3 className="font-bold">Fast</h3>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm space-y-2 col-span-2">
              <BarChart3 className="text-emerald-500" size={32} />
              <h3 className="font-bold">Real-time Analytics</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}