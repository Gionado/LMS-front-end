import type { Course } from "@/types/lwu";
import { courseToneStyles } from "./courseTones";

export function ProgressBar({ value, label = true, tone = "sky" }: { value: number; label?: boolean; tone?: Course["tone"] }) {
  return (
    <div>
      {label && <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500"><span>Progress</span><span className="text-[#0B2D5C]">{value}%</span></div>}
      <div className="h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} aria-label={`Course progress ${value}%`}>
        <div className={`h-full rounded-full bg-gradient-to-r ${courseToneStyles[tone].gradient} transition-all`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
