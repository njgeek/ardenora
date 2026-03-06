"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function PortalLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        window.location.href = "/portal/shop";
      } else {
        const body = await res.json();
        setError(body.error || "Invalid email or password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-20 bg-gray-50/50">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Lock size={28} className="text-gold" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-[var(--font-display)] mb-2">
            Buyer Portal
          </h1>
          <p className="text-muted text-sm">
            Sign in to browse inventory, view pricing, and place orders
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm"
        >
          {error && (
            <div className="bg-accent/5 border border-accent/20 text-accent text-sm rounded-xl px-4 py-3 mb-6">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                  placeholder="your@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-light transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/20"
          >
            {loading ? (
              "Signing in..."
            ) : (
              <>
                Sign In to Portal
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <div className="mt-6 text-center">
            <a
              href="mailto:sales@ardenora.com?subject=Password Reset Request"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Forgot your password? Contact sales@ardenora.com
            </a>
          </div>
        </form>

        {/* Not a buyer yet */}
        <div className="mt-8 text-center bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted mb-3">
            Not a buyer yet?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
          >
            Apply to Become a Buyer
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
