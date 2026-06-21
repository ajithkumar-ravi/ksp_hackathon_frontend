import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-6">
      <div className="text-center max-w-sm">
        <div className="size-14 rounded-md bg-paper-dim flex items-center justify-center mx-auto mb-5">
          <ShieldAlert className="size-7 text-ink-faint" strokeWidth={1.6} />
        </div>
        <h1 className="text-[20px] font-bold text-ink mb-1.5">Page not found</h1>
        <p className="text-[14px] text-ink-faint mb-6 leading-relaxed">
          This module doesn't exist or you don't have clearance to view it.
        </p>
        <Link to="/dashboard">
          <Button variant="primary" size="md" className="w-full">Return to dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
