import { NavLink } from "react-router-dom";
import { Settings, LogOut, ShieldCheck } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import { cx } from "@/lib/cx";
import emblem from "@/assets/emblem.png";
import { useAuthStore } from "@/store/useAuthStore";

export default function Sidebar() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <aside className="fixed inset-y-0 left-0 w-sidebar bg-command-800 flex flex-col z-30">
      {/* Brand */}
      <div className="h-topbar flex items-center gap-3 px-5 border-b border-command-line shrink-0">
        <img src={emblem} alt="" className="size-9 object-contain shrink-0" />
        <div className="min-w-0">
          <p className="text-[14px] font-bold text-white leading-tight truncate">
            KSP Intel
          </p>
          <p className="text-[11px] text-command-ink-dim leading-tight truncate">
            Investigation Portal
          </p>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              cx(
                "group relative flex items-center gap-3 h-10 px-3 rounded-sm text-[14px] font-medium transition-colors duration-150",
                isActive
                  ? "bg-command-700 text-white"
                  : "text-command-ink hover:bg-command-700/60 hover:text-white"
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={cx(
                    "absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-signal-500 transition-opacity",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
                <Icon className="size-[18px] shrink-0" strokeWidth={1.8} />
                <span className="truncate">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4 pt-2 border-t border-command-line flex flex-col gap-0.5 shrink-0">
        <div className="flex items-center gap-2 px-3 py-2 mb-1 text-[11px] text-command-ink-dim">
          <ShieldCheck className="size-3.5" strokeWidth={2} />
          <span>Secure session active</span>
        </div>
        <button className="flex items-center gap-3 h-10 px-3 rounded-sm text-[14px] font-medium text-command-ink hover:bg-command-700/60 hover:text-white transition-colors">
          <Settings className="size-[18px]" strokeWidth={1.8} />
          Settings
        </button>
        <button
          onClick={logout}
          className="flex items-center gap-3 h-10 px-3 rounded-sm text-[14px] font-medium text-command-ink hover:bg-command-700/60 hover:text-white transition-colors"
        >
          <LogOut className="size-[18px]" strokeWidth={1.8} />
          Logout
        </button>
      </div>
    </aside>
  );
}
