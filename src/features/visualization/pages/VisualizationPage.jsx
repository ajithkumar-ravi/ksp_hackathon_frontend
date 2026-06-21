import { ZoomIn, ZoomOut, Scan, Sparkles, FileText, Network, Clock, GitBranch, FileOutput, AlertTriangle, User } from "lucide-react";
import Card, { CardHeader } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { confidenceMetrics } from "@/data/mockData";

const TONE_BAR = {
  alert: "bg-alert-600",
  caution: "bg-caution-600",
  confirmed: "bg-confirmed-600",
};
const TONE_TEXT = {
  alert: "text-alert-700",
  caution: "text-caution-700",
  confirmed: "text-confirmed-700",
};

export default function VisualizationPage() {
  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-5 h-[calc(100vh-64px-48px)]">
      {/* Evidence repository */}
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">Evidence repository</span>
          <Badge tone="signal">Case #10482</Badge>
        </div>

        <Card>
          <div className="flex items-start gap-2.5 mb-3">
            <div className="size-9 rounded-sm bg-alert-100 flex items-center justify-center shrink-0">
              <FileText className="size-4 text-alert-700" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-ink truncate">Incident_Report_04.pdf</p>
              <p className="text-[12px] text-ink-faint">Witness Statement · 4.2MB</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            <Badge tone="confirmed">OCR Verified</Badge>
            <Badge tone="signal">High Priority</Badge>
          </div>
          <div className="flex flex-col gap-1.5">
            {[90, 75, 95, 60].map((w, i) => (
              <div key={i} className="h-2 rounded-full bg-paper-dim" style={{ width: `${w}%` }} />
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="Related media" className="mb-3" />
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square rounded-sm bg-command-900" />
            <div className="aspect-square rounded-sm bg-command-700" />
          </div>
        </Card>
      </div>

      {/* Reasoning canvas */}
      <div className="flex flex-col bg-canvas border border-line rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-line">
          <div className="flex items-center gap-2.5">
            <Network className="size-4 text-command-700" strokeWidth={1.8} />
            <span className="text-[13px] font-semibold text-ink">AI reasoning canvas</span>
            <Badge tone="confirmed" dot>Neural engine active</Badge>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="size-8 flex items-center justify-center rounded-sm border border-line-strong text-ink-soft hover:bg-paper-dim">
              <ZoomIn className="size-4" strokeWidth={1.8} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-sm border border-line-strong text-ink-soft hover:bg-paper-dim">
              <ZoomOut className="size-4" strokeWidth={1.8} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-sm border border-line-strong text-ink-soft hover:bg-paper-dim">
              <Scan className="size-4" strokeWidth={1.8} />
            </button>
            <Button variant="primary" size="sm" icon={Sparkles}>Run deep analysis</Button>
          </div>
        </div>

        <div
          className="flex-1 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(var(--color-line) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* Connection lines (decorative, behind nodes) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="38%" y1="32%" x2="58%" y2="34%" stroke="var(--color-line-strong)" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="48%" y1="40%" x2="58%" y2="58%" stroke="var(--color-alert-600)" strokeWidth="1.5" />
          </svg>

          {/* Suspect node */}
          <div className="absolute left-[8%] top-[22%] w-64 bg-canvas border border-line-strong rounded-md shadow-[0_4px_12px_rgba(10,26,44,0.08)] overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-line bg-paper-dim">
              <User className="size-3.5 text-ink-faint" strokeWidth={2} />
              <span className="text-[11px] font-bold uppercase tracking-wide text-ink-faint">Suspect primary</span>
            </div>
            <div className="p-3">
              <p className="text-[13px] font-semibold text-ink mb-2">Unidentified #01</p>
              <div className="aspect-[4/3] rounded-sm bg-command-900" />
            </div>
          </div>

          {/* Witness node */}
          <div className="absolute left-[42%] top-[26%] w-60 bg-canvas border border-line-strong rounded-md shadow-[0_4px_12px_rgba(10,26,44,0.08)] p-3">
            <p className="text-[11px] font-bold uppercase tracking-wide text-ink-faint mb-1">Witness A</p>
            <p className="text-[13px] font-semibold text-ink mb-1">R. Kumar</p>
            <p className="text-[12px] text-ink-soft leading-snug">
              Present at scene at time matching evidence timestamp #04.
            </p>
          </div>

          {/* Critical conflict node */}
          <div className="absolute left-[40%] top-[55%] w-64 bg-canvas border border-alert-600/40 rounded-md shadow-[0_4px_12px_rgba(10,26,44,0.08)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-alert-100">
              <AlertTriangle className="size-3.5 text-alert-700" strokeWidth={2} />
              <span className="text-[11px] font-bold uppercase tracking-wide text-alert-700">Critical conflict</span>
            </div>
            <div className="p-3">
              <p className="text-[13px] font-semibold text-ink mb-1">Timeline mismatch</p>
              <p className="text-[12px] text-ink-soft leading-snug mb-2">
                Witness B claims suspect fled south; traffic cam #18 shows northbound movement at the same
                timestamp.
              </p>
              <Badge tone="alert">Reliability: low</Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 px-4 py-2.5 border-t border-line">
          {[
            { label: "Relationship", icon: GitBranch },
            { label: "Timeline", icon: Clock },
            { label: "Flow", icon: Network },
          ].map(({ label, icon: Icon }, i) => (
            <button
              key={label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[12px] font-medium transition-colors ${
                i === 0 ? "bg-paper-dim text-ink" : "text-ink-faint hover:bg-paper-dim"
              }`}
            >
              <Icon className="size-3.5" strokeWidth={1.8} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Confidence metrics */}
      <div className="flex flex-col gap-5 overflow-y-auto">
        <Card>
          <CardHeader title="Confidence metrics" className="mb-4" />
          <div className="flex flex-col items-center mb-5">
            <ConfidenceRing value={78} />
            <p className="text-[12px] font-semibold uppercase tracking-wide text-alert-700 mt-2">Suspicious</p>
          </div>
          <div className="flex flex-col gap-3.5">
            {confidenceMetrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-center justify-between text-[12px] mb-1">
                  <span className="font-medium text-ink-soft">{m.label}</span>
                  <span className={`font-semibold ${TONE_TEXT[m.tone]}`}>{m.display}</span>
                </div>
                <div className="h-1.5 rounded-full bg-paper-dim overflow-hidden">
                  <div className={`h-full rounded-full ${TONE_BAR[m.tone]}`} style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="bg-canvas border-l-2 border-caution-600 border-y border-r border-line rounded-md p-4">
          <p className="text-[12px] font-bold uppercase tracking-wide text-ink mb-1.5">AI recommendation</p>
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Cross-reference Witness B's mobile tower location data with the reported time of sighting. High
            probability of fabricated statement.
          </p>
        </div>

        <div className="bg-canvas border-l-2 border-signal-600 border-y border-r border-line rounded-md p-4">
          <p className="text-[13px] font-bold text-ink mb-1.5">New connection found</p>
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Suspect #01 has been linked to a similar cold case in Mysore (2022) via matching shoe-print patterns.
          </p>
        </div>

        <Button variant="primary" size="lg" icon={FileOutput} className="w-full mt-auto">
          Generate summary report
        </Button>
      </div>
    </div>
  );
}

function ConfidenceRing({ value }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg width="120" height="120" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--color-paper-dim)" strokeWidth="9" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="var(--color-alert-600)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
      <text x="50" y="55" textAnchor="middle" className="font-mono" fontSize="20" fontWeight="700" fill="var(--color-ink)">
        {value}%
      </text>
    </svg>
  );
}
