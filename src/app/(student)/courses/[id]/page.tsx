import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Circle, Clock3, Play, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { courseToneStyles } from "@/components/lwu/courseTones";
import { ProgressBar } from "@/components/lwu/ProgressBar";
import { courses } from "@/data/lwu";

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);
  if (!course) notFound();

  const tone = courseToneStyles[course.tone];
  const modules = [
    "Welcome & learning roadmap",
    `Core ${course.category} foundations`,
    "Guided practice and feedback",
    "Final review and next steps",
  ];

  return (
    <div>
      <Breadcrumbs current="Course Details" />
      <Link href="/courses" className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#155EAA] hover:underline">
        <ArrowLeft size={16} />Back to Courses
      </Link>

      <section className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${tone.gradient} p-6 text-white sm:p-9`}>
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[48px] border-white/10" />
        <div className="relative max-w-3xl">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-white backdrop-blur-sm">{course.category}</span>
          <h1 className="mt-5 text-3xl font-black tracking-[-.035em] sm:text-4xl">{course.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">Build practical, confident skills through guided lessons, real examples, and feedback from experienced instructors.</p>
          <div className="mt-6 flex flex-wrap gap-5 text-xs font-semibold text-white/90">
            <span className="flex items-center gap-2"><UserRound size={16} />{course.instructor}</span>
            <span className="flex items-center gap-2"><Clock3 size={16} />{course.duration}</span>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-extrabold text-[#0B2D5C]">Course content</h2>
          <p className="mt-1 text-sm text-slate-500">{course.totalLessons} lessons across 4 modules</p>
          <div className="mt-5 space-y-3">
            {modules.map((module, index) => {
              const complete = index < Math.floor(course.progress / 25);
              return (
                <details key={module} className="group rounded-xl border border-slate-200 p-4" open={index === Math.floor(course.progress / 25)}>
                  <summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-bold text-slate-700">
                    <span className={`grid h-8 w-8 place-items-center rounded-lg ${complete ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                      {complete ? <CheckCircle2 size={17} /> : <Circle size={16} />}
                    </span>
                    <span>Module {index + 1}: {module}</span>
                    <span className="ml-auto text-xs font-medium text-slate-400">{index === 0 ? 6 : index === 3 ? 5 : 7} lessons</span>
                  </summary>
                  <div className="ml-11 mt-4 rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-500">Video lessons, guided activities, and a short knowledge check. Your progress saves automatically.</div>
                </details>
              );
            })}
          </div>
        </section>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
          <p className={`text-xs font-bold uppercase tracking-[.14em] ${tone.accent}`}>Your progress</p>
          <p className="mt-3 text-4xl font-black text-[#0B2D5C]">{course.progress}%</p>
          <p className="mt-1 text-xs text-slate-500">{course.completedLessons} of {course.totalLessons} lessons complete</p>
          <div className="mt-5"><ProgressBar value={course.progress} label={false} tone={course.tone} /></div>
          <button className={`mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${tone.gradient} text-sm font-extrabold text-white`}>
            <Play size={15} fill="currentColor" />{course.progress === 0 ? "Start first lesson" : course.progress === 100 ? "Review lesson" : "Continue lesson"}
          </button>
        </aside>
      </div>
    </div>
  );
}
