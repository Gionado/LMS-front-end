import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock3, Download, Flame, Library, Play, Sparkles } from "lucide-react";
import { CourseCard } from "@/components/lwu/CourseCard";
import { ProgressBar } from "@/components/lwu/ProgressBar";
import { courses } from "@/data/lwu";

const stats = [
  { label: "Courses enrolled", value: "6", note: "+2 this month", icon: BookOpen, color: "bg-sky-50 text-[#155EAA]" },
  { label: "Courses completed", value: "2", note: "Keep it up", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-700" },
  { label: "Learning hours", value: "47.5", note: "+3.2 this week", icon: Clock3, color: "bg-violet-50 text-violet-700" },
  { label: "Ebooks owned", value: "6", note: "2 new titles", icon: Library, color: "bg-orange-50 text-orange-700" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-[1.75rem] bg-[#0B2D5C] p-6 text-white shadow-[0_18px_50px_rgba(11,45,92,.16)] sm:p-8 lg:p-10">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[50px] border-sky-400/10" /><div className="absolute bottom-0 right-20 hidden h-36 w-64 skew-x-[-18deg] rounded-t-[3rem] bg-white/[.06] md:block" />
        <div className="relative z-10 max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-100"><Sparkles size={14} className="text-[#F6C667]" />Tuesday, 28 July</span>
          <h1 className="text-3xl font-black tracking-[-.035em] sm:text-4xl">Good morning, Gionado!</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-sky-100/80 sm:text-base">You are 4 lessons away from this week&apos;s goal. Let&apos;s keep the momentum going.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3"><Link href="/courses/ielts-masterclass" className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#F6C667] px-5 text-sm font-extrabold text-[#0B2D5C] transition hover:-translate-y-0.5 hover:bg-[#ffd47d]"><Play size={15} fill="currentColor" />Continue Learning</Link><div className="flex items-center gap-2 px-2 text-xs font-semibold text-sky-100"><Flame size={18} className="text-orange-400" fill="currentColor" />12 day streak</div></div>
        </div>
      </section>

      <section aria-labelledby="learning-overview"><div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#155EAA]">At a glance</p><h2 id="learning-overview" className="mt-1 text-xl font-extrabold tracking-[-.02em] text-[#0B2D5C]">Learning overview</h2></div><p className="hidden text-xs text-slate-500 sm:block">Updated just now</p></div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ label, value, note, icon: Icon, color }) => <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_7px_24px_rgba(11,45,92,.05)]"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-slate-500">{label}</p><p className="mt-2 text-3xl font-black tracking-[-.04em] text-[#0B2D5C]">{value}</p></div><span className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}><Icon size={19} /></span></div><p className="mt-3 text-[11px] font-semibold text-slate-400">{note}</p></article>)}</div>
      </section>

      <section><div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#155EAA]">Pick up where you left off</p><h2 className="mt-1 text-xl font-extrabold tracking-[-.02em] text-[#0B2D5C]">Continue learning</h2></div><Link href="/courses" className="flex items-center gap-1 text-sm font-bold text-[#155EAA] hover:underline">View all <ArrowRight size={16} /></Link></div><div className="grid gap-5 xl:grid-cols-2">{courses.slice(0, 2).map((course) => <CourseCard key={course.id} course={course} compact />)}</div></section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#155EAA]">Coming up</p><h2 className="mt-1 text-lg font-extrabold text-[#0B2D5C]">Upcoming schedule</h2></div><CalendarDays className="text-slate-400" size={21} /></div><div className="space-y-3">
          {[{ date: "29", day: "WED", title: "Speaking Practice", detail: "IELTS Preparation · Zoom class", time: "19:00" }, { date: "31", day: "FRI", title: "Business Presentation Workshop", detail: "Business English · Live workshop", time: "18:30" }, { date: "04", day: "TUE", title: "IELTS Writing Review", detail: "Feedback session · Zoom class", time: "20:00" }].map((item) => <article key={item.title} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition hover:border-sky-100 hover:bg-sky-50/40"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-center shadow-sm"><span><span className="block text-base font-black leading-4 text-[#0B2D5C]">{item.date}</span><span className="text-[9px] font-bold text-[#155EAA]">{item.day}</span></span></div><div className="min-w-0"><h3 className="truncate text-sm font-bold text-slate-800">{item.title}</h3><p className="mt-1 truncate text-xs text-slate-500">{item.detail}</p></div><span className="ml-auto shrink-0 rounded-lg bg-white px-2.5 py-1.5 text-xs font-bold text-[#155EAA]">{item.time}</span></article>)}
        </div></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="mb-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#155EAA]">This week</p><h2 className="mt-1 text-lg font-extrabold text-[#0B2D5C]">Weekly goal</h2></div><div className="rounded-2xl bg-[#F5F8FC] p-5"><div className="flex items-end justify-between"><div><p className="text-3xl font-black text-[#0B2D5C]">6<span className="text-base text-slate-400"> / 10 lessons</span></p><p className="mt-1 text-xs text-slate-500">You&apos;re doing great—60% complete.</p></div><span className="text-xs font-extrabold text-[#155EAA]">60%</span></div><div className="mt-5"><ProgressBar value={60} label={false} /></div></div><div className="mt-5 space-y-4">
          {[{ icon: CheckCircle2, title: "Completed a lesson", meta: "IELTS Reading Strategies · 2h ago", color: "text-emerald-600 bg-emerald-50" }, { icon: Download, title: "Downloaded an ebook", meta: "Business English Vocabulary · Yesterday", color: "text-sky-600 bg-sky-50" }, { icon: BookOpen, title: "Started a new course", meta: "Leadership Fundamentals · 2 days ago", color: "text-orange-600 bg-orange-50" }].map(({ icon: Icon, title, meta, color }) => <div key={title} className="flex items-center gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${color}`}><Icon size={16} /></span><div><p className="text-xs font-bold text-slate-700">{title}</p><p className="mt-0.5 text-[11px] text-slate-400">{meta}</p></div></div>)}
        </div></section>
      </div>
    </div>
  );
}
