import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, ShieldCheck, ArrowRight } from "lucide-react";
import emblem from "@/assets/emblem.png";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-paper-dim flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-canvas rounded-lg border border-line overflow-hidden grid md:grid-cols-2 shadow-[0_1px_2px_rgba(10,26,44,0.06)]">
        {/* Brand panel */}
        <div className="bg-command-800 p-10 flex flex-col justify-between min-h-[480px] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative">
            <div className="size-14 rounded-md bg-white/95 flex items-center justify-center p-2 mb-6">
              <img src={emblem} alt="Department emblem" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-[20px] font-bold text-white mb-2">KSP Intel</h1>
            <p className="text-[14px] text-command-ink leading-relaxed max-w-xs">
              AI-powered investigation and intelligence platform. Secure gateway for authorized personnel only.
            </p>
          </div>
          <div className="relative flex items-center gap-2 text-[12px] text-command-ink-dim font-medium">
            <ShieldCheck className="size-4" strokeWidth={2} />
            End-to-end encrypted
          </div>
        </div>

        {/* Form panel */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-[22px] font-bold text-ink mb-1">Sign in</h2>
          <p className="text-[14px] text-ink-faint mb-7">Access the central intelligence dashboard.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              label="Officer username"
              icon={User}
              placeholder="officer.ksp"
              defaultValue="officer.ksp"
              autoComplete="username"
            />
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[13px] font-medium text-ink-soft">Password</label>
                <button type="button" className="text-[13px] font-medium text-signal-600 hover:text-signal-700">
                  Forgot password?
                </button>
              </div>
              <Input
                icon={Lock}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                defaultValue="••••••••"
                autoComplete="current-password"
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-ink-faint hover:text-ink-soft"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="size-4" strokeWidth={2} /> : <Eye className="size-4" strokeWidth={2} />}
                  </button>
                }
              />
            </div>

            <div className="flex items-start gap-2.5 bg-paper-dim border border-line rounded-sm px-3.5 py-3">
              <ShieldCheck className="size-4 text-signal-600 shrink-0 mt-0.5" strokeWidth={2} />
              <p className="text-[13px] text-ink-soft leading-snug">
                Multi-factor authentication will be required on the next step.
              </p>
            </div>

            <Button type="submit" variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full">
              Sign in
            </Button>

            <div className="flex items-center gap-3 my-1">
              <div className="h-px bg-line flex-1" />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">New officer?</span>
              <div className="h-px bg-line flex-1" />
            </div>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => navigate("/register")}
            >
              Request registration
            </Button>
          </form>

          <p className="text-[12px] text-ink-faint leading-relaxed mt-7">
            Unauthorized access is strictly prohibited and monitored under the KSP Cyber Security Act.
          </p>
        </div>
      </div>
    </div>
  );
}
