"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("student@lwu.com");
  const [password, setPassword] = useState("student123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setError("");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    if (!password) return setError("Password is required.");
    if (email !== "student@lwu.com" || password !== "student123") return setError("Incorrect email or password.");
    setLoading(true);
    localStorage.setItem("lwu-auth", "true");
    setTimeout(() => router.push("/dashboard"), 500);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5F7FA] px-5 py-10">
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[56px] border-sky-100/70" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#155EAA]/[.04]" />

      <section className="relative w-full max-w-[440px] rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_38px_rgba(15,23,42,.08)] sm:px-9 sm:py-9" aria-labelledby="login-title">
        <div className="mb-7 flex justify-center"><BrandMark stacked /></div>
        <div className="text-center">
          <h1 id="login-title" className="text-2xl font-bold tracking-[-.02em] text-slate-900">Sign in to your account</h1>
        </div>

        <form className="mt-7 space-y-5" onSubmit={submit} noValidate>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <span className="relative block"><Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#155EAA] focus:bg-white focus:ring-2 focus:ring-blue-100" placeholder="name@example.com" autoComplete="email" /></span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
            <span className="relative block"><LockKeyhole className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-11 text-sm text-slate-900 outline-none transition focus:border-[#155EAA] focus:bg-white focus:ring-2 focus:ring-blue-100" placeholder="Enter your password" autoComplete="current-password" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-2.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-slate-400 hover:bg-slate-100" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></span>
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 font-normal text-slate-600"><input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-[#155EAA]" defaultChecked />Remember me</label>
            <Link href="#" className="font-medium text-[#155EAA] hover:underline">Forgot password?</Link>
          </div>

          {error && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700">{error}</p>}

          <button type="submit" disabled={loading} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#155EAA] text-sm font-semibold text-white transition hover:bg-[#0B4D8C] focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:opacity-60">{loading ? "Signing in..." : <>Sign in <ArrowRight size={16} /></>}</button>
        </form>

        <p className="mt-5 text-center text-xs text-slate-400">Demo: student@lwu.com · student123</p>
      </section>
    </main>
  );
}
