import { cx } from "@/lib/cx";

const VARIANTS = {
  primary:
    "bg-command-800 text-white hover:bg-command-700 active:bg-command-900 border border-transparent",
  secondary:
    "bg-canvas text-ink border border-line-strong hover:bg-paper-dim active:bg-line",
  ghost:
    "bg-transparent text-ink-soft border border-transparent hover:bg-paper-dim hover:text-ink",
  danger:
    "bg-alert-600 text-white hover:bg-alert-700 border border-transparent",
  signal:
    "bg-signal-600 text-white hover:bg-signal-700 border border-transparent",
};

const SIZES = {
  sm: "h-8 px-3 text-[13px] gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-11 px-5 text-sm gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  iconPosition = "left",
  children,
  ...props
}) {
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="size-4 shrink-0" strokeWidth={2} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="size-4 shrink-0" strokeWidth={2} />}
    </button>
  );
}
