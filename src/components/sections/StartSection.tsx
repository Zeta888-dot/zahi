"use client";

import { useState } from "react";

const MONO = '"JetBrains Mono", monospace';

export default function StartSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden" id="start" style={{ background: "#0B1216" }}>
      {/* glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(40,118,157,0.28), transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="zahi-content relative" style={{ paddingBlock: 120 }}>
        <div className="mx-auto max-w-[680px] text-center">
          <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.18em", color: "#6FB6DD" }}>
            EARLY ACCESS
          </p>

          <h2
            className="mt-6"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: 0.95,
              color: "#EAF4F9",
            }}
          >
            Your first try-on
            <br />
            <span style={{ color: "#6FB6DD" }}>in 30 seconds.</span>
          </h2>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#9BAAB1", marginTop: 20 }}>
            Join the waitlist. We onboard a small batch of stores every
            week and reply with a personal invite and a live demo.
          </p>

          {/* Form */}
          {sent ? (
            <div
              className="mx-auto mt-10 max-w-[460px] rounded-[18px] p-6"
              style={{ border: "1px solid rgba(111,182,221,0.25)", background: "rgba(17,29,36,0.6)" }}
            >
              <p style={{ fontFamily: MONO, fontSize: 10, color: "#6FB6DD" }}>
                ✓ REQUEST RECEIVED
              </p>
              <p className="mt-3" style={{ fontSize: 13, color: "#EAF4F9", lineHeight: 1.6 }}>
                Thanks — we'll reach out within one business day with an
                invite and a live demo.
              </p>
            </div>
          ) : (
            <form
              className="mx-auto mt-10 flex w-full max-w-[460px] gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSent(true);
              }}
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourstore.com"
                className="flex-1 rounded-full border px-5"
                style={{
                  padding: "14px 18px",
                  fontSize: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(17,29,36,0.6)",
                  color: "#EAF4F9",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                className="shrink-0 rounded-full px-6"
                style={{
                  padding: "14px 22px",
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#6FB6DD",
                  color: "#0B1216",
                }}
              >
                Join waitlist
              </button>
            </form>
          )}

          <p className="mt-6" style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.1em", color: "#52707E" }}>
            200+ STORES ON WAITLIST · NO SPAM, EVER
          </p>
        </div>
      </div>
    </section>
  );
}