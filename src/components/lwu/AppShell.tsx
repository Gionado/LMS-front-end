"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, BookOpen, CircleHelp, LayoutDashboard, Library, LogOut, Menu, ReceiptText, Search, Settings, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Courses", href: "/courses", icon: BookOpen },
  { label: "Ebooks", href: "/ebooks", icon: Library },
  { label: "Purchase History", href: "/purchase-history", icon: ReceiptText },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("lwu-auth") !== "true") router.replace("/login");
  }, [router]);

  const logout = () => {
    localStorage.removeItem("lwu-auth");
    router.push("/login");
  };

  const pageLabel = navigation.find((item) => pathname.startsWith(item.href))?.label ?? "Student Portal";

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-[#172033]">
      {mobileOpen && <button type="button" aria-label="Close navigation" className="fixed inset-0 z-40 bg-[#071E3E]/50 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col overflow-y-auto bg-[#0B2D5C] px-4 py-5 text-white transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-2">
          <BrandMark dark />
          <button type="button" className="grid h-9 w-9 place-items-center rounded-lg text-white/70 hover:bg-white/10 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20} /></button>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.07] p-3.5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F6C667] text-sm font-extrabold text-[#0B2D5C]">GN</div>
            <div className="min-w-0"><p className="truncate text-sm font-bold">Gionado Nugraha</p><p className="text-[11px] font-medium text-sky-200">Active Student</p></div>
          </div>
        </div>
        <nav className="mt-7" aria-label="Main navigation">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-sky-200/70">Learning space</p>
          <ul className="space-y-1.5">
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              const Icon = item.icon;
              return <li key={item.href}><Link href={item.href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${active ? "bg-white text-[#0B2D5C] shadow-lg" : "text-sky-50/80 hover:bg-white/10 hover:text-white"}`}><Icon size={19} strokeWidth={active ? 2.4 : 2} /><span>{item.label}</span>{active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#38A9E0]" />}</Link></li>;
            })}
          </ul>
        </nav>
        <div className="mt-auto space-y-1 border-t border-white/10 pt-5">
          <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-sky-50/70 hover:bg-white/10 hover:text-white"><CircleHelp size={18} />Help Center</button>
          <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-sky-50/70 hover:bg-white/10 hover:text-white"><Settings size={18} />Settings</button>
          <button onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-rose-200 hover:bg-rose-400/10 hover:text-white"><LogOut size={18} />Logout</button>
        </div>
      </aside>

      <div className="lg:pl-[272px]">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1500px] items-center gap-3">
            <button type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-600 lg:hidden" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>
            <div className="hidden min-w-36 lg:block"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">Student portal</p><p className="text-sm font-bold text-[#0B2D5C]">{pageLabel}</p></div>
            <label className="relative ml-auto hidden w-full max-w-md md:block">
              <span className="sr-only">Search the student portal</span><Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="Search courses, ebooks, or resources" />
            </label>
            <button type="button" className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50" aria-label="Notifications"><Bell size={19} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-orange-500" /></button>
            <div className="relative">
              <button type="button" onClick={() => setProfileOpen((value) => !value)} className="flex items-center gap-2 rounded-xl p-1.5 pr-2 transition hover:bg-slate-50" aria-expanded={profileOpen} aria-label="Open profile menu">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F6C667] text-xs font-extrabold text-[#0B2D5C]">GN</span><span className="hidden text-left xl:block"><span className="block text-xs font-bold">Gionado</span><span className="block text-[10px] text-slate-500">Student</span></span>
              </button>
              {profileOpen && <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"><p className="px-3 py-2 text-xs text-slate-500">student@lwu.com</p><button onClick={logout} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"><LogOut size={16} />Log out</button></div>}
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
