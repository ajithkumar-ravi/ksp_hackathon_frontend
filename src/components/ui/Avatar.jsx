import { cx } from "@/lib/cx";

const SIZES = {
  sm: "size-7 text-[11px]",
  md: "size-9 text-[13px]",
  lg: "size-11 text-[15px]",
};

export default function Avatar({ src, name, size = "md", className }) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  if (src) {
    return (
      <img
        src={src}
        alt={name || "Avatar"}
        className={cx("rounded-full object-cover border border-line-strong shrink-0", SIZES[size], className)}
      />
    );
  }

  return (
    <div
      className={cx(
        "rounded-full bg-command-700 text-white flex items-center justify-center font-semibold shrink-0",
        SIZES[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
