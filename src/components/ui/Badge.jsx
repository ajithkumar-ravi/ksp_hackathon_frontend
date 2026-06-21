import { cx } from "@/lib/cx";

const TONES = {
  neutral: "bg-paper-dim text-ink-soft border-line-strong",
  signal: "bg-signal-100 text-signal-700 border-signal-100",
  confirmed: "bg-confirmed-100 text-confirmed-700 border-confirmed-100",
  caution: "bg-caution-100 text-caution-700 border-caution-100",
  alert: "bg-alert-100 text-alert-700 border-alert-100",
  "command-solid": "bg-command-800 text-white border-command-800",
};

export default function Badge({ tone = "neutral", dot = false, className, children }) {
  const dotColor = {
    neutral: "bg-ink-faint",
    signal: "bg-signal-600",
    confirmed: "bg-confirmed-600",
    caution: "bg-caution-600",
    alert: "bg-alert-600",
    "command-solid": "bg-white",
  }[tone];

  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-semibold uppercase tracking-wide",
        TONES[tone],
        className
      )}
    >
      {dot && <span className={cx("size-1.5 rounded-full", dotColor)} />}
      {children}
    </span>
  );
}
