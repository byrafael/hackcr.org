import { Info } from "lucide-react";

interface ParticipationNoticeProps {
  className?: string;
  starClassName?: string;
}

function joinClasses(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function ParticipationNotice({ className, starClassName }: ParticipationNoticeProps) {
  return (
    <span className={joinClasses("relative inline-block group", className)}>
      <span
        className={joinClasses(
          "text-[#ff9f1c] font-mono text-[10px] align-super inline-flex items-center justify-center",
          starClassName,
        )}
      >
        *
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
        <span className="glass-card rounded-lg px-3 py-2 text-xs text-[#f8f9fa]/70 border-[#ff9f1c]/20 flex items-center gap-2">
          <Info className="w-3 h-3 text-[#ff9f1c]" />
          Expected participation
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#15151c]" />
      </span>
    </span>
  );
}
