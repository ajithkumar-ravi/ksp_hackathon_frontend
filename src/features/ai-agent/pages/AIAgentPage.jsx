import { Bot, Paperclip, SendHorizontal, FileText, Users, MapPin, Video, Fingerprint, UserSearch, Plus } from "lucide-react";
import Card, { CardHeader } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import { relatedIntel } from "@/data/mockData";

const QUICK_ACTIONS = [
  { label: "Analyze FIR", desc: "Summary and extraction", icon: FileText },
  { label: "Suspect patterns", desc: "Cross-reference records", icon: Users },
  { label: "Crime hotspot", desc: "Spatial intelligence", icon: MapPin },
];

const INTEL_ICONS = { video: Video, forensic: Fingerprint, dossier: UserSearch };

export default function AIAgentPage() {
  return (
    <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 h-[calc(100vh-64px-48px)]">
      {/* Chat column */}
      <div className="flex flex-col bg-canvas border border-line rounded-md overflow-hidden">
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-8 text-center gap-5">
          <div className="size-16 rounded-lg bg-command-800 flex items-center justify-center">
            <Bot className="size-8 text-white" strokeWidth={1.6} />
          </div>
          <div>
            <h2 className="text-[22px] font-bold text-ink mb-2">How can I assist your investigation today?</h2>
            <p className="text-[14px] text-ink-faint max-w-md leading-relaxed">
              Access real-time forensics, link criminal records, and generate intelligence briefings with the KSP
              AI Agent.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 w-full max-w-xl mt-2">
            {QUICK_ACTIONS.map(({ label, desc, icon: Icon }) => (
              <button
                key={label}
                className="text-left bg-canvas border border-line rounded-md p-4 hover:border-signal-600 hover:bg-signal-50 transition-colors flex flex-col gap-2.5"
              >
                <Icon className="size-5 text-command-700" strokeWidth={1.8} />
                <div>
                  <p className="text-[13px] font-semibold text-ink">{label}</p>
                  <p className="text-[12px] text-ink-faint mt-0.5">{desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-line p-4">
          <div className="flex items-center gap-2 bg-paper-dim border border-line-strong rounded-sm px-3 py-2 focus-within:border-signal-600 focus-within:ring-2 focus-within:ring-signal-600/20 transition-colors">
            <button aria-label="Attach file" className="text-ink-faint hover:text-ink-soft shrink-0">
              <Paperclip className="size-[18px]" strokeWidth={1.8} />
            </button>
            <input
              type="text"
              placeholder="Type your message or ask a question..."
              className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <button
              aria-label="Send message"
              className="size-8 rounded-sm bg-command-800 hover:bg-command-700 flex items-center justify-center shrink-0 transition-colors"
            >
              <SendHorizontal className="size-4 text-white" strokeWidth={2} />
            </button>
          </div>
          <p className="text-[11px] text-ink-faint text-center mt-2.5">
            KSP AI can make mistakes. Verify critical intelligence before filing reports.
          </p>
        </div>
      </div>

      {/* Context sidebar */}
      <div className="flex flex-col gap-5 overflow-y-auto">
        <Card>
          <CardHeader title="Investigation context" className="mb-3.5" />
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">Active case</span>
            <Badge tone="caution" dot>Ongoing</Badge>
          </div>
          <p className="font-mono text-[15px] font-semibold text-ink mb-4">KSP-2024-C00482</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1">Incident type</p>
              <p className="text-[13px] font-medium text-ink">Retail Burglary</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1">Division</p>
              <p className="text-[13px] font-medium text-ink">Central · Zone 1</p>
            </div>
          </div>

          <div className="h-px bg-line mb-4" />

          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-2">Assigned officers</p>
          <div className="flex items-center -space-x-2">
            <Avatar name="Insp. Smith" size="sm" className="ring-2 ring-canvas" />
            <Avatar name="Officer A" size="sm" className="ring-2 ring-canvas" />
            <Avatar name="Officer B" size="sm" className="ring-2 ring-canvas" />
            <div className="size-7 rounded-full bg-paper-dim ring-2 ring-canvas flex items-center justify-center text-[11px] font-semibold text-ink-soft">
              +3
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Related intel" className="mb-3" />
          <div className="flex flex-col gap-2.5">
            {relatedIntel.map((item) => {
              const Icon = INTEL_ICONS[item.type];
              return (
                <button
                  key={item.id}
                  className="flex items-center gap-3 p-2.5 rounded-sm hover:bg-paper-dim transition-colors text-left -mx-2.5"
                >
                  <div className="size-9 rounded-sm bg-paper-dim flex items-center justify-center shrink-0">
                    <Icon className="size-4 text-command-700" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-ink truncate">{item.title}</p>
                    <p className="text-[12px] text-ink-faint truncate">{item.meta}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <Button variant="secondary" size="lg" icon={Plus} className="w-full">
          New case file
        </Button>
      </div>
    </div>
  );
}
