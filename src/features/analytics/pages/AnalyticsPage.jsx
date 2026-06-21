import { Calendar, MapPin, Filter as FilterIcon, SlidersHorizontal, UploadCloud, Share2, FileOutput } from "lucide-react";
import Card, { CardHeader } from "@/components/ui/Card";
import SelectField from "@/components/ui/SelectField";
import Button from "@/components/ui/Button";
import { analyticsStats, crimeTrendMonths } from "@/data/mockData";

const heatCells = Array.from({ length: 28 }, (_, i) => {
  const seed = (i * 37) % 100;
  return seed > 80 ? "high" : seed > 55 ? "med" : seed > 25 ? "low" : "min";
});

const heatTone = {
  min: "bg-paper-dim",
  low: "bg-signal-100",
  med: "bg-signal-500/60",
  high: "bg-command-800",
};

export default function AnalyticsPage() {
  const maxVal = Math.max(...crimeTrendMonths.map((m) => m.actual));

  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[20px] font-bold text-ink">Analytics dashboard</h2>
          <p className="text-[13px] text-ink-faint mt-0.5">Module 4 · Intelligence &amp; trend analysis</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SelectField icon={Calendar} label="Jan – Jun 2024" />
          <SelectField icon={MapPin} label="All districts" />
          <SelectField icon={SlidersHorizontal} label="All crime types" />
          <Button variant="secondary" size="md" icon={FilterIcon}>More filters</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsStats.map((s) => (
          <div key={s.label} className="bg-canvas border border-line rounded-md p-5 flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">{s.label}</span>
            <p className="text-[26px] font-bold text-ink font-mono leading-none">{s.value}</p>
            <span className={`text-[13px] font-medium ${s.deltaTone === "alert" ? "text-alert-700" : "text-confirmed-700"}`}>
              {s.delta}
            </span>
          </div>
        ))}
        <Card className="flex flex-col items-center justify-center gap-2">
          <FileOutput className="size-6 text-command-700" strokeWidth={1.6} />
          <Button variant="primary" size="sm" className="w-full">Review intel</Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader title="Crime rate trends" subtitle="Monthly total case volume (Jan – Jun 2024)" />
          <div className="flex items-end gap-3 h-52">
            {crimeTrendMonths.map((m) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div
                  className="w-full max-w-10 bg-command-700 rounded-t-sm hover:bg-command-800 transition-colors"
                  style={{ height: `${(m.actual / maxVal) * 100}%` }}
                />
                <span className="text-[12px] font-medium text-ink-faint">{m.month}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Density heatmap" subtitle="By district and hour" />
          <div className="grid grid-cols-7 gap-1.5 mb-4">
            {heatCells.map((level, i) => (
              <div key={i} className={`aspect-square rounded-[2px] ${heatTone[level]}`} />
            ))}
          </div>
          <div className="flex items-center justify-between text-[11px] font-medium text-ink-faint">
            <span>Low volume</span>
            <div className="flex items-center gap-1">
              <span className="size-2.5 rounded-[2px] bg-paper-dim" />
              <span className="size-2.5 rounded-[2px] bg-signal-100" />
              <span className="size-2.5 rounded-[2px] bg-signal-500/60" />
              <span className="size-2.5 rounded-[2px] bg-command-800" />
            </div>
            <span>Critical spike</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader
            title="Resolution efficiency rate"
            subtitle="Success % over 24h operational cycle"
            action={
              <div className="flex items-center gap-3 text-[12px] font-medium text-ink-soft">
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-command-800" />Current</span>
                <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-line-strong" />Baseline</span>
              </div>
            }
          />
          <EfficiencyChart />
        </Card>

        <Card>
          <CardHeader title="Evidence &amp; file upload" subtitle="Secure intake for forensic data" />
          <div className="border-2 border-dashed border-line-strong rounded-md flex flex-col items-center justify-center gap-3 py-10 px-6 text-center hover:border-signal-600 hover:bg-signal-50 transition-colors cursor-pointer">
            <UploadCloud className="size-7 text-command-700" strokeWidth={1.6} />
            <div>
              <p className="text-[14px] font-semibold text-ink">Click or drag files to upload</p>
              <p className="text-[12px] text-ink-faint mt-1">
                Supports PDF, JPG, MP4 and structured forensic data. Encryption enabled.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 mt-4">
            <Button variant="secondary" size="md" icon={Share2} className="flex-1">Internal share</Button>
            <Button variant="primary" size="md" className="flex-1">Generate report</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function EfficiencyChart() {
  const points = [20, 35, 38, 40, 45, 55, 90];
  const baseline = [12, 15, 14, 16, 18, 20, 22];
  const max = 100;
  const toPath = (arr) =>
    arr
      .map((v, i) => `${(i / (arr.length - 1)) * 100},${100 - (v / max) * 100}`)
      .join(" ");

  return (
    <div className="h-56">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <polyline
          points={toPath(baseline)}
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
          strokeDasharray="3 2"
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          points={toPath(points)}
          fill="none"
          stroke="var(--color-command-700)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex justify-between text-[11px] text-ink-faint font-mono mt-1">
        <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span>
      </div>
    </div>
  );
}
