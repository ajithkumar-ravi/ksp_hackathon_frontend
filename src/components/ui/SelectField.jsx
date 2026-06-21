import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/cx";

export default function SelectField({ icon: Icon, label, className, ...props }) {
  return (
    <div
      className={cx(
        "inline-flex items-center gap-2 h-10 px-3 rounded-sm border border-line-strong bg-canvas text-sm text-ink hover:border-ink-faint transition-colors cursor-pointer",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="size-4 text-ink-faint" strokeWidth={2} />}
      <span className="font-medium">{label}</span>
      <ChevronDown className="size-3.5 text-ink-faint ml-auto" strokeWidth={2} />
    </div>
  );
}
