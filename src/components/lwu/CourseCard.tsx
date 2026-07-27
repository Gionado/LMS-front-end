import Link from "next/link";
import { BookOpen, CheckCircle2, Clock3, Play, ShoppingCart } from "lucide-react";
import { formatRupiah } from "@/data/lwu";
import type { Course } from "@/types/lwu";
import { ProgressBar } from "./ProgressBar";
import { courseToneStyles } from "./courseTones";

const statusLabel = { "not-started": "Not started", "in-progress": "In progress", completed: "Completed" };

export function CourseCard({ course, compact = false, onBuy }: { course: Course; compact?: boolean; onBuy?: (course: Course) => void }) {
  return (
    <article className={`group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 ${compact ? "flex flex-col sm:flex-row" : ""}`}>
      <div className={`relative overflow-hidden bg-gradient-to-br ${courseToneStyles[course.tone].gradient} ${compact ? "min-h-44 sm:w-[38%]" : "h-44"}`}>
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border-[22px] border-white/10" />
        <div className="absolute -bottom-12 -left-8 h-32 w-32 rotate-12 rounded-3xl bg-white/10" />
        <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur">{course.category}</span>
        <div className="absolute bottom-5 left-5 text-white">
          <span className="text-3xl font-black tracking-[-.04em]">{course.shortTitle}</span>
          <span className="ml-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/70">series</span>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {course.owned ? <><span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700"><CheckCircle2 size={12} />Owned</span><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${course.status === "completed" ? "bg-emerald-50 text-emerald-700" : course.status === "not-started" ? "bg-amber-50 text-amber-700" : "bg-sky-50 text-[#155EAA]"}`}>{statusLabel[course.status]}</span></> : <span className="inline-flex rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-rose-600 ring-1 ring-inset ring-rose-200">Available</span>}
            </div>
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-[#172033]">{course.title}</h3>
            <p className="mt-1 text-xs text-slate-500">with {course.instructor}</p>
          </div>
        </div>
        <div className="mb-4 mt-auto flex items-center gap-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5"><BookOpen size={14} /> {course.totalLessons} lessons</span>
          <span className="flex items-center gap-1.5"><Clock3 size={14} /> {course.duration}</span>
        </div>
        {course.owned ? <ProgressBar value={course.progress} tone={course.tone} /> : <p className="text-lg font-bold text-[#0B2D5C]">{formatRupiah(course.price)}</p>}
        {course.owned ? <Link href={`/courses/${course.id}`} className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0B2D5C] px-4 text-sm font-semibold text-white transition hover:bg-[#155EAA] focus:outline-none focus:ring-4 focus:ring-sky-200">
          {course.progress === 0 ? "Start Course" : course.progress === 100 ? "Review Course" : "Continue Course"} <Play size={14} fill="currentColor" />
        </Link> : <button type="button" onClick={() => onBuy?.(course)} className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0B2D5C] px-4 text-sm font-semibold text-white transition hover:bg-[#155EAA] focus:outline-none focus:ring-4 focus:ring-sky-200"><ShoppingCart size={15} />Buy Course</button>}
      </div>
    </article>
  );
}
