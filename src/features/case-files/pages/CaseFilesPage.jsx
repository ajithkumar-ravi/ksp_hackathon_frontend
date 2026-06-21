import { Plus, Filter as FilterIcon, ChevronRight, FolderLock } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SelectField from "@/components/ui/SelectField";

const CASES = [
  { id: "KSP-2024-C00482", type: "Retail Burglary", division: "Central · Zone 1", status: "Ongoing", priority: "High", updated: "2 min ago" },
  { id: "KSP-2024-C00481", type: "Cyber Fraud", division: "South · Zone 3", status: "Under Review", priority: "Critical", updated: "1 hour ago" },
  { id: "KSP-2024-C00479", type: "Vehicle Theft", division: "North · Zone 2", status: "Ongoing", priority: "Medium", updated: "3 hours ago" },
  { id: "KSP-2024-C00475", type: "Assault", division: "East · Zone 1", status: "Closed", priority: "Low", updated: "Yesterday" },
  { id: "KSP-2024-C00471", type: "Cyber Crime", division: "Central · Zone 4", status: "Ongoing", priority: "High", updated: "2 days ago" },
];

const STATUS_TONE = { Ongoing: "signal", "Under Review": "caution", Closed: "neutral" };
const PRIORITY_TONE = { Critical: "alert", High: "caution", Medium: "signal", Low: "neutral" };

export default function CaseFilesPage() {
  return (
    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-[20px] font-bold text-ink">Case files</h2>
          <p className="text-[13px] text-ink-faint mt-0.5">All active and archived investigation records</p>
        </div>
        <div className="flex items-center gap-2">
          <SelectField label="All statuses" />
          <Button variant="secondary" size="md" icon={FilterIcon}>Filters</Button>
          <Button variant="primary" size="md" icon={Plus}>New case file</Button>
        </div>
      </div>

      <Card padded={false}>
        <div className="grid grid-cols-[1fr_1fr_1fr_120px_100px_110px_36px] gap-4 px-5 py-3 border-b border-line bg-paper-dim">
          {["Case ID", "Incident type", "Division", "Status", "Priority", "Updated", ""].map((h) => (
            <span key={h} className="text-[11px] font-bold uppercase tracking-wide text-ink-faint">{h}</span>
          ))}
        </div>
        <div className="flex flex-col">
          {CASES.map((c) => (
            <button
              key={c.id}
              className="grid grid-cols-[1fr_1fr_1fr_120px_100px_110px_36px] gap-4 px-5 py-3.5 border-t border-line items-center hover:bg-paper-dim transition-colors text-left"
            >
              <span className="font-mono text-[13px] font-semibold text-ink">{c.id}</span>
              <span className="text-[13px] text-ink-soft">{c.type}</span>
              <span className="text-[13px] text-ink-soft">{c.division}</span>
              <Badge tone={STATUS_TONE[c.status]} dot>{c.status}</Badge>
              <Badge tone={PRIORITY_TONE[c.priority]}>{c.priority}</Badge>
              <span className="text-[12px] text-ink-faint">{c.updated}</span>
              <ChevronRight className="size-4 text-ink-faint" strokeWidth={2} />
            </button>
          ))}
        </div>
      </Card>

      <div className="flex items-center justify-center gap-2 text-ink-faint">
        <FolderLock className="size-4" strokeWidth={1.8} />
        <p className="text-[12px]">5 of 12,846 case files shown</p>
      </div>
    </div>
  );
}
