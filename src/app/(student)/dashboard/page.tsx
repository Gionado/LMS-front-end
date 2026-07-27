import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, Clock3, Download, Library, Play, Target } from "lucide-react";
import { CourseCard } from "@/components/lwu/CourseCard";
import { ProgressBar } from "@/components/lwu/ProgressBar";
import { courses } from "@/data/lwu";

const stats = [
  { label: "Courses enrolled", value: "6", icon: BookOpen, color: "bg-sky-50 text-[#155EAA]" },
  { label: "Courses completed", value: "2", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-700" },
  { label: "Learning hours", value: "47.5", icon: Clock3, color: "bg-violet-50 text-violet-700" },
  { label: "Ebooks owned", value: "6", icon: Library, color: "bg-orange-50 text-orange-700" },
];

const schedule = [
  { date: "29", day: "WED", title: "Speaking Practice", detail: "IELTS Preparation", time: "19:00" },
  { date: "31", day: "FRI", title: "Business Presentation Workshop", detail: "Business English", time: "18:30" },
  { date: "04", day: "TUE", title: "IELTS Writing Review", detail: "Feedback session", time: "20:00" },
];

const activity = [
  { icon: CheckCircle2, title: "Completed a lesson", meta: "IELTS Reading Strategies · 2h ago", color: "text-emerald-600 bg-emerald-50" },
  { icon: Download, title: "Downloaded an ebook", meta: "Business English Vocabulary · Yesterday", color: "text-sky-600 bg-sky-50" },
  { icon: BookOpen, title: "Started a new course", meta: "Leadership Fundamentals · 2 days ago", color: "text-orange-600 bg-orange-50" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-xl bg-[#0B2D5C] p-6 text-white shadow-sm sm:p-8">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[50px] border-sky-400/10" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-2xl font-bold tracking-[-.02em] sm:text-3xl">Good morning, Nadira!</h1>
          <p className="mt-2 text-sm leading-6 text-sky-100/80">You have 4 lessons left to reach this week&apos;s goal.</p>
          <Link href="/courses/ielts-masterclass" className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-[#F6C667] px-4 text-sm font-semibold text-[#0B2D5C] transition hover:bg-[#ffd47d]"><Play size={14} fill="currentColor" />Continue Learning</Link>
        </div>
      </section>

      <section aria-labelledby="learning-overview">
        <h2 id="learning-overview" className="mb-4 text-xl font-semibold text-[#0B2D5C]">Learning overview</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, color }) => <article key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-slate-500">{label}</p><p className="mt-2 text-2xl font-bold text-[#0B2D5C]">{value}</p></div><span className={`grid h-10 w-10 place-items-center rounded-lg ${color}`}><Icon size={19} /></span></div></article>)}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold text-[#0B2D5C]">Continue learning</h2><Link href="/courses?filter=in-progress" className="flex items-center gap-1 text-sm font-medium text-[#155EAA] hover:underline">View all <ArrowRight size={15} /></Link></div>
        <div className="grid gap-5 xl:grid-cols-2">{courses.slice(0, 2).map((course) => <CourseCard key={course.id} course={course} compact />)}</div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-semibold text-[#0B2D5C]">Upcoming schedule</h2><CalendarDays className="text-slate-400" size={20} /></div>
          <div className="space-y-3">{schedule.map((item) => <article key={item.title} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-center shadow-sm"><span className="flex flex-col items-center justify-center gap-1"><span className="text-sm font-bold leading-none text-[#0B2D5C]">{item.date}</span><span className="text-[9px] font-semibold leading-none text-[#155EAA]">{item.day}</span></span></div><div className="min-w-0"><h3 className="truncate text-sm font-semibold text-slate-800">{item.title}</h3><p className="mt-0.5 truncate text-xs text-slate-500">{item.detail}</p></div><span className="ml-auto shrink-0 text-xs font-semibold text-[#155EAA]">{item.time}</span></article>)}</div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-semibold text-[#0B2D5C]">Weekly goal</h2><Target className="text-slate-400" size={20} /></div>
          <div className="rounded-xl bg-slate-50 p-5"><div className="flex items-end justify-between"><p className="text-2xl font-bold text-[#0B2D5C]">6<span className="text-sm font-medium text-slate-400"> / 10 lessons</span></p><span className="text-xs font-semibold text-[#155EAA]">60%</span></div><div className="mt-4"><ProgressBar value={60} label={false} /></div></div>
          <div className="mt-5 space-y-4">{activity.map(({ icon: Icon, title, meta, color }) => <div key={title} className="flex items-center gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${color}`}><Icon size={16} /></span><div><p className="text-xs font-semibold text-slate-700">{title}</p><p className="mt-0.5 text-[11px] text-slate-400">{meta}</p></div></div>)}</div>
        </section>
      </div>
    </div>
  );
}
