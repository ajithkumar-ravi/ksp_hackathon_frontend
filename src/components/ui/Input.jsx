import { cx } from "@/lib/cx";

export default function Input({
  label,
  hint,
  error,
  icon: Icon,
  trailing,
  className,
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-medium text-ink-soft">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="absolute left-3 size-4 text-ink-faint pointer-events-none" strokeWidth={2} />
        )}
        <input
          id={inputId}
          className={cx(
            "w-full h-10 rounded-sm border bg-canvas text-sm text-ink placeholder:text-ink-faint transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-signal-600/20 focus:border-signal-600",
            Icon ? "pl-9" : "pl-3",
            trailing ? "pr-9" : "pr-3",
            error ? "border-alert-600" : "border-line-strong hover:border-ink-faint",
            className
          )}
          {...props}
        />
        {trailing && <div className="absolute right-3">{trailing}</div>}
      </div>
      {error && <span className="text-[12px] text-alert-700">{error}</span>}
      {!error && hint && <span className="text-[12px] text-ink-faint">{hint}</span>}
    </div>
  );
}
