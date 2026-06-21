import { FolderCog, ClipboardCheck, CheckCircle2, AlertTriangle, Download, Calendar, Plus, Sparkles, ChevronRight } from "lucide-react";
import Card, { CardHeader } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { dashboardStats, caseClassification, recentActivity, crimeTrendMonths } from "@/data/mockData";

const STAT_ICONS = [FolderCog, ClipboardCheck, CheckCircle2, AlertTriangle];

export default function DashboardPage() {
  const maxVal = Math.max(...crimeTrendMonths.map((m) => Math.max(m.actual, m.forecast)));

  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[20px] font-bold text-ink">Operational overview</h2>
          <p className="text-[13px] text-ink-faint mt-0.5">Real-time intelligence feed for Southern Command</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="md" icon={Calendar}>Last 30 days</Button>
          <Button variant="secondary" size="md" icon={Download}>Export PDF</Button>
          <Button variant="primary" size="md" icon={Plus}>New investigation</Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, i) => {
          const Icon = STAT_ICONS[i];
          return (
            <div key={stat.label} className="bg-canvas border border-line rounded-md p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="size-9 rounded-sm bg-paper-dim flex items-center justify-center">
                  <Icon className="size-[18px] text-command-700" strokeWidth={1.8} />
                </div>
                <span
                  className={`text-[12px] font-semibold ${
                    stat.deltaTone === "alert" ? "text-alert-700" : "text-confirmed-700"
                  }`}
                >
                  {stat.delta}
                </span>
              </div>
              <div>
                <p className="text-[26px] font-bold text-ink font-mono leading-none">{stat.value}</p>
                <p className="text-[13px] text-ink-faint mt-1.5">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trend + classification */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader
            title="Crime trend analysis"
            subtitle="Monthly case volume, actuals vs. forecast"
            action={
              <div className="flex items-center gap-4 text-[12px] font-medium text-ink-soft">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-command-800" />2024 Actuals</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-line-strong" />Forecast</span>
              </div>
            }
          />
          <div className="flex items-end justify-between gap-3 h-56 px-2">
            {crimeTrendMonths.map((m) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  <div
                    className="w-1/2 max-w-7 bg-line-strong rounded-t-sm"
                    style={{ height: `${(m.forecast / maxVal) * 100}%` }}
                  />
                  <div
                    className="w-1/2 max-w-7 bg-command-800 rounded-t-sm"
                    style={{ height: `${(m.actual / maxVal) * 100}%` }}
                  />
                </div>
                <span className="text-[12px] font-medium text-ink-faint">{m.month}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Case classification" subtitle="Distribution by type" />
          <div className="flex flex-col gap-3">
            {caseClassification.map((c) => (
              <div key={c.label}>
                <div className="flex items-center justify-between text-[13px] mb-1">
                  <span className="font-medium text-ink-soft">{c.label}</span>
                  <span className="font-mono font-semibold text-ink">{c.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-paper-dim overflow-hidden">
                  <div
                    className="h-full rounded-full bg-command-700"
                    style={{ width: `${c.pct}%`, opacity: 0.4 + c.pct / 60 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Activity + AI insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2" padded={false}>
          <div className="flex items-center justify-between p-5 pb-0">
            <CardHeader title="Recent intelligence activity" className="mb-0" />
            <button className="text-[13px] font-semibold text-signal-600 hover:text-signal-700 flex items-center gap-1 mb-4">
              View all <ChevronRight className="size-3.5" strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex flex-col">
            {recentActivity.map((item) => (
              <button
                key={item.id}
                className="flex items-center gap-4 px-5 py-3.5 border-t border-line hover:bg-paper-dim transition-colors text-left w-full"
              >
                <span className={`size-2 rounded-full shrink-0 ${item.urgent ? "bg-alert-600" : "bg-line-strong"}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-medium text-ink truncate">{item.title}</p>
                  <p className="text-[12px] text-ink-faint mt-0.5">{item.meta}</p>
                </div>
                <ChevronRight className="size-4 text-ink-faint shrink-0" strokeWidth={2} />
              </button>
            ))}
          </div>
        </Card>

        <div className="bg-command-800 rounded-md p-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-[18px] text-signal-500" strokeWidth={2} />
            <h3 className="text-[15px] font-semibold text-white">AI strategic insights</h3>
          </div>

          <div className="bg-command-700 rounded-sm p-4 flex flex-col gap-2">
            <Badge tone="alert" dot>Anomalous activity</Badge>
            <p className="text-[13px] text-command-ink leading-relaxed">
              Cyber-theft reports in <span className="text-white font-semibold">South Zone</span> have increased by{" "}
              <span className="text-white font-semibold">22%</span> compared to the 3-month moving average.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-command-ink-dim mb-1.5">
              Recommendation
            </p>
            <p className="text-[13px] text-command-ink leading-relaxed">
              Reassign two field units to South Zone for the next 72-hour cycle to monitor escalation.
            </p>
          </div>

          <Button variant="signal" size="sm" className="mt-auto w-full">
            Open AI agent
          </Button>
        </div>
      </div>
    </div>
  );
}
