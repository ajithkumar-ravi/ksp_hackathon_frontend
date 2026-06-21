import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Briefcase, ShieldCheck, ArrowRight, Phone, Mail, AlertCircle } from "lucide-react";
import emblem from "@/assets/emblem.png";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { cx } from "@/lib/cx";

const STEPS = [
  { key: "personal", label: "Personal", icon: User },
  { key: "professional", label: "Professional", icon: Briefcase },
  { key: "security", label: "Security", icon: ShieldCheck },
];

export default function RegistrationPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  function next() {
    if (step < STEPS.length - 1) setStep(step + 1);
    else navigate("/login");
  }

  return (
    <div className="min-h-screen bg-paper-dim">
      <header className="h-16 bg-command-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-sm bg-white/95 flex items-center justify-center p-1.5">
            <img src={emblem} alt="" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-[14px] font-bold text-white leading-tight">Karnataka State Police</p>
            <p className="text-[11px] text-command-ink-dim leading-tight tracking-wide">
              INTELLIGENCE &amp; AI PORTAL
            </p>
          </div>
        </div>
        <p className="text-[12px] text-command-ink-dim font-mono">Registration ID: KSP-2024-TMP</p>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-[26px] font-bold text-ink mb-1.5">New user registration</h1>
          <p className="text-[14px] text-ink-faint">Official personnel verification and access portal</p>
        </div>

        {/* Stepper */}
        <div className="bg-canvas border border-line rounded-md mb-6 overflow-hidden">
          <div className="flex border-b border-line">
            {STEPS.map(({ key, label, icon: Icon }, i) => (
              <div
                key={key}
                className={cx(
                  "flex-1 flex flex-col items-center gap-1.5 py-4 border-b-2 -mb-px transition-colors",
                  i === step ? "border-command-800" : "border-transparent"
                )}
              >
                <Icon
                  className={cx("size-4", i === step ? "text-command-800" : "text-ink-faint")}
                  strokeWidth={2}
                />
                <span
                  className={cx(
                    "text-[11px] font-semibold uppercase tracking-wide",
                    i === step ? "text-command-800" : "text-ink-faint"
                  )}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-7">
            {step === 0 && (
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Full name (as per ID)" icon={User} placeholder="Enter your full name" />
                <Input label="Mobile number" icon={Phone} placeholder="+91 XXXXX XXXXX" />
                <div className="sm:col-span-2">
                  <Input
                    label="Official email address"
                    icon={Mail}
                    placeholder="officer.name@ksp.gov.in"
                    hint="Personal email addresses may delay the verification process."
                  />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Badge / Service ID" icon={Briefcase} placeholder="KSP-XXXXXX" />
                <Input label="Rank" icon={Briefcase} placeholder="e.g. Sub-Inspector" />
                <Input label="Posting / Division" icon={Briefcase} placeholder="e.g. Central - Zone 1" />
                <Input label="Reporting officer" icon={Briefcase} placeholder="Officer name" />
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col gap-5">
                <Input label="Create password" icon={ShieldCheck} type="password" placeholder="••••••••" />
                <Input label="Confirm password" icon={ShieldCheck} type="password" placeholder="••••••••" />
              </div>
            )}

            <div className="flex justify-end mt-7">
              <Button onClick={next} icon={ArrowRight} iconPosition="right">
                {step < STEPS.length - 1 ? "Next step" : "Submit for review"}
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-canvas border border-line rounded-md p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="size-4 text-signal-600" strokeWidth={2} />
            <h3 className="text-[13px] font-bold uppercase tracking-wide text-ink">
              Welcome to Karnataka Police AI Assistant
            </h3>
          </div>
          <div className="h-px bg-line mb-3" />
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Please be aware that after registration, your account must be reviewed and approved by a senior
            officer. Once authentication is granted, you will receive a confirmation email. We appreciate your
            patience.
          </p>
        </div>

        <footer className="flex items-center justify-center gap-3 mt-8 text-[12px] text-ink-faint">
          <span>© 2024 Karnataka State Police</span>
          <span>·</span>
          <button className="hover:text-ink-soft">Privacy Policy</button>
          <span>·</span>
          <button className="hover:text-ink-soft">Digital Security Guidelines</button>
        </footer>
      </main>
    </div>
  );
}
