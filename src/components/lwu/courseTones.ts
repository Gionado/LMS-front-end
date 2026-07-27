import type { Course } from "@/types/lwu";

type CourseTone = Course["tone"];

export const courseToneStyles: Record<CourseTone, { gradient: string; accent: string }> = {
  sky: { gradient: "from-[#0D6CAD] to-[#38A9E0]", accent: "text-[#0D6CAD]" },
  navy: { gradient: "from-[#071E3E] to-[#155EAA]", accent: "text-[#155EAA]" },
  orange: { gradient: "from-[#E87833] to-[#F3AB58]", accent: "text-[#E87833]" },
  mint: { gradient: "from-[#11847A] to-[#5EC4A8]", accent: "text-[#11847A]" },
  violet: { gradient: "from-[#6544A5] to-[#9B7BD6]", accent: "text-[#6544A5]" },
  rose: { gradient: "from-[#B34B6B] to-[#E0839D]", accent: "text-[#B34B6B]" },
};
