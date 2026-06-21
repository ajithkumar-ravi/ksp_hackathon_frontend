import { cx } from "@/lib/cx";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ label, value, delta, deltaTone = "confirmed", icon: Icon, className }) {
  const isUp = delta?.startsWith("+");
  const toneClass = {
    confirmed: "text-confirmed-700",
    alert: "text-alert-700",
    neutral: "text-ink-faint",
  }[deltaTone];

  return (
    <div className={cx("bg-canvas border border-line rounded-md p-5 flex flex-col gap-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold uppercase tracking-wide text-ink-faint">
          {label}
        </span>
        {Icon && (
          <div className="size-8 rounded-sm bg-paper-dim flex items-center justify-center">
            <Icon className="size-4 text-ink-soft" strokeWidth={2} />
          </div>
        )}
      </div>
      <div className="text-[28px] font-bold text-ink leading-none tracking-tight font-mono">
        {value}
      </div>
      {delta && (
        <div className={cx("flex items-center gap-1 text-[13px] font-medium", toneClass)}>
          {isUp ? (
            <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
          ) : (
            <ArrowDownRight className="size-3.5" strokeWidth={2.5} />
          )}
          {delta}
        </div>
      )}
    </div>
  );
}
