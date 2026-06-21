import { Search, Bell, HelpCircle } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import Avatar from "@/components/ui/Avatar";

export default function Topbar({ title, breadcrumb, right }) {
  const officer = useAuthStore((s) => s.officer);

  return (
    <header className="h-topbar bg-canvas border-b border-line flex items-center gap-6 px-6 shrink-0">
      <div className="min-w-0 shrink-0">
        {breadcrumb && (
          <p className="text-[11px] text-ink-faint font-medium mb-0.5">{breadcrumb}</p>
        )}
        <h1 className="text-[16px] font-bold text-ink leading-tight truncate">{title}</h1>
      </div>

      <div className="flex-1 max-w-md relative hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-ink-faint" strokeWidth={2} />
        <input
          type="text"
          placeholder="Search case intel..."
          className="w-full h-9 pl-9 pr-12 rounded-sm border border-line-strong bg-paper-dim text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-signal-600/20 focus:border-signal-600 focus:bg-canvas transition-colors"
        />
        <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-ink-faint bg-canvas border border-line-strong rounded px-1.5 py-0.5">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-1 ml-auto shrink-0">
        {right}
        <button
          aria-label="Notifications"
          className="relative size-9 flex items-center justify-center rounded-sm text-ink-soft hover:bg-paper-dim transition-colors"
        >
          <Bell className="size-[18px]" strokeWidth={1.8} />
          <span className="absolute top-2 right-2 size-1.5 rounded-full bg-alert-600" />
        </button>
        <button
          aria-label="Help"
          className="size-9 flex items-center justify-center rounded-sm text-ink-soft hover:bg-paper-dim transition-colors"
        >
          <HelpCircle className="size-[18px]" strokeWidth={1.8} />
        </button>
        <div className="w-px h-6 bg-line mx-2" />
        <div className="flex items-center gap-2.5 pr-1">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-semibold text-ink leading-tight">{officer.name}</p>
            <p className="text-[11px] text-ink-faint leading-tight font-mono">{officer.role}</p>
          </div>
          <Avatar name={officer.name} size="md" />
        </div>
      </div>
    </header>
  );
}
