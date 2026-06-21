import { cx } from "@/lib/cx";

export default function Card({ className, padded = true, children, ...props }) {
  return (
    <div
      className={cx(
        "bg-canvas border border-line rounded-md",
        padded && "p-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action, className }) {
  return (
    <div className={cx("flex items-start justify-between gap-4 mb-4", className)}>
      <div>
        <h3 className="text-[15px] font-semibold text-ink leading-tight">{title}</h3>
        {subtitle && (
          <p className="text-[13px] text-ink-faint mt-0.5">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
