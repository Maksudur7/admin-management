// src/app/(auth)/login/page.tsx
export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-[440px] bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="p-10">
                    <div className="mb-10 text-center">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                            A
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
                        <p className="text-slate-500 mt-2">Enter your details to access your account</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="text-sm font-semibold text-slate-700 block mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-slate-700 block mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all transform active:scale-[0.98]">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account? <span className="text-indigo-600 font-bold cursor-pointer">Contact Admin</span>
                    </div>
                </div>
            </div>
        </div>
    );
}