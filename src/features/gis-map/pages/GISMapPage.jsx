import { Plus, Minus, LocateFixed, Layers, Filter as FilterIcon, AlertOctagon, Eye, ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { gisHotspots, liveActivityFeed } from "@/data/mockData";

const LEVEL_COLOR = {
  alert: "var(--color-alert-600)",
  caution: "var(--color-caution-600)",
  signal: "var(--color-confirmed-600)",
  neutral: "var(--color-signal-500)",
};

const ZONE_LEGEND = [
  { label: "Critical zone", sub: "High risk", tone: "alert" },
  { label: "High alert", sub: "Medium", tone: "caution" },
  { label: "Moderate", sub: "Stable", tone: "signal" },
  { label: "Safe zone", sub: "Low risk", tone: "confirmed" },
];

export default function GISMapPage() {
  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 h-[calc(100vh-64px-48px)]">
      {/* Map */}
      <div className="relative rounded-md overflow-hidden border border-line bg-command-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 42% 58%, rgba(28,95,168,0.25), transparent 55%)",
          }}
        />

        {/* Hotspot markers */}
        {gisHotspots.map((h) => (
          <div
            key={h.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            {h.primary ? (
              <div className="relative">
                <span
                  className="absolute inset-0 rounded-full animate-ping opacity-40"
                  style={{ backgroundColor: LEVEL_COLOR[h.level] }}
                />
                <div
                  className="relative size-9 rounded-full flex items-center justify-center text-white ring-4 ring-canvas/20"
                  style={{ backgroundColor: LEVEL_COLOR[h.level] }}
                >
                  <AlertOctagon className="size-4" strokeWidth={2.2} />
                </div>
              </div>
            ) : (
              <div
                className="size-3.5 rounded-full ring-2 ring-canvas/30"
                style={{ backgroundColor: LEVEL_COLOR[h.level] }}
              />
            )}
          </div>
        ))}

        {/* Map controls */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          <button className="size-9 bg-canvas rounded-sm flex items-center justify-center text-ink-soft hover:bg-paper-dim shadow-sm">
            <Plus className="size-4" strokeWidth={2} />
          </button>
          <button className="size-9 bg-canvas rounded-sm flex items-center justify-center text-ink-soft hover:bg-paper-dim shadow-sm">
            <Minus className="size-4" strokeWidth={2} />
          </button>
          <button className="size-9 bg-canvas rounded-sm flex items-center justify-center text-ink-soft hover:bg-paper-dim shadow-sm">
            <LocateFixed className="size-4" strokeWidth={2} />
          </button>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button variant="secondary" size="sm" icon={Layers} className="bg-canvas">Layers</Button>
          <Button variant="secondary" size="sm" icon={FilterIcon} className="bg-canvas">Filters</Button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-canvas rounded-md p-4 w-56 shadow-[0_4px_12px_rgba(10,26,44,0.18)]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-ink-faint mb-2.5">Zone intensity</p>
          <div className="flex flex-col gap-2">
            {ZONE_LEGEND.map((z) => (
              <div key={z.label} className="flex items-center justify-between text-[12px]">
                <span className="flex items-center gap-2 font-medium text-ink">
                  <span
                    className="size-2.5 rounded-sm"
                    style={{
                      backgroundColor:
                        z.tone === "alert"
                          ? "var(--color-alert-600)"
                          : z.tone === "caution"
                          ? "var(--color-caution-600)"
                          : z.tone === "signal"
                          ? "var(--color-confirmed-600)"
                          : "var(--color-signal-500)",
                    }}
                  />
                  {z.label}
                </span>
                <span className="text-ink-faint">{z.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side panel */}
      <div className="flex flex-col gap-5 overflow-y-auto">
        <Card>
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1">Current focus</p>
              <h3 className="text-[18px] font-bold text-ink">Bengaluru South</h3>
            </div>
            <Badge tone="alert">High risk</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-paper-dim rounded-sm p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1">Crime index</p>
              <p className="text-[22px] font-bold text-alert-700 font-mono leading-none">72</p>
              <p className="text-[12px] text-alert-700 font-medium mt-1">+5.4%</p>
            </div>
            <div className="bg-paper-dim rounded-sm p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1">Active cases</p>
              <p className="text-[22px] font-bold text-ink font-mono leading-none">124</p>
              <p className="text-[12px] text-ink-faint font-medium mt-1">Units: 12</p>
            </div>
          </div>
        </Card>

        <Card padded={false}>
          <div className="flex items-center justify-between p-5 pb-3">
            <h3 className="text-[15px] font-semibold text-ink">Live activity feed</h3>
            <button className="text-[12px] font-semibold text-signal-600 hover:text-signal-700">Export</button>
          </div>
          <div className="flex flex-col gap-3 px-5 pb-5">
            {liveActivityFeed.map((item) => {
              const Icon = item.tone === "alert" ? AlertOctagon : Eye;
              return (
                <div key={item.id} className="flex items-start gap-3 border border-line rounded-sm p-3">
                  <div
                    className={`size-8 rounded-sm flex items-center justify-center shrink-0 ${
                      item.tone === "alert" ? "bg-alert-100 text-alert-700" : "bg-signal-100 text-signal-700"
                    }`}
                  >
                    <Icon className="size-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[13px] font-semibold text-ink">{item.title}</p>
                      <span className="text-[11px] text-ink-faint shrink-0">{item.time}</span>
                    </div>
                    <p className="text-[12px] text-ink-faint mt-0.5">{item.meta}</p>
                    <div className="flex gap-1.5 mt-2">
                      {item.tags.map((t) => (
                        <Badge key={t} tone={t === "Dispatched" ? "signal" : "neutral"}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[13px] font-bold uppercase tracking-wide text-ink-faint">Predictive trend</h3>
            <Badge tone="confirmed">Stable</Badge>
          </div>
          <div className="flex items-end gap-2 h-24">
            {[30, 42, 36, 58, 50, 88, 70].map((v, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${i >= 5 ? "bg-alert-600" : "bg-command-700"}`}
                style={{ height: `${v}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[11px] text-ink-faint font-mono mt-1.5">
            <span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span>
          </div>
        </Card>

        <Button variant="primary" size="lg" icon={ExternalLink} className="w-full">
          Full intel report
        </Button>
      </div>
    </div>
  );
}
