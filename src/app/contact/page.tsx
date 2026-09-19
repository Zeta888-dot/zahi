"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "#ffffff",
  border: "1px solid #D5E6ED",
  borderRadius: 9999,
  padding: "14px 20px",
  fontSize: 13,
  color: "#111315",
  outline: "none",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="zahi-section" style={{ paddingTop: 150, paddingBottom: 120 }}>
      <div className="zahi-content grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        {/* Left: info */}
        <div>
          <p className="zahi-eyebrow">Contact</p>
          <h1 className="zahi-heading mt-6" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
            Something
            <br />
            <span className="zahi-blue">useful.</span>
          </h1>
          <p className="zahi-body mt-6" style={{ fontSize: 15, maxWidth: 420 }}>
            Whether you run a fashion store, want to integrate virtual
            try-on, or simply want to understand what zahi can do, send us
            a note.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div>
              <p className="zahi-label">Sales</p>
              <a href="mailto:hello@zahi.pk" className="mt-1 block" style={{ fontSize: 14, color: "#111315" }}>
                hello@zahi.pk
              </a>
            </div>
            <div>
              <p className="zahi-label">Support</p>
              <a href="mailto:support@zahi.pk" className="mt-1 block" style={{ fontSize: 14, color: "#111315" }}>
                support@zahi.pk
              </a>
            </div>
            <div>
              <p className="zahi-label">Office</p>
              <p className="mt-1" style={{ fontSize: 14, color: "#111315", lineHeight: 1.6 }}>
                Office 4, Main Bazaar Road
                <br />
                Chitral, KPK, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        {sent ? (
          <div className="zahi-panel-raised flex flex-col items-start gap-4 p-10">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: "#4DA878", color: "#ffffff", fontSize: 16 }}
            >
              ✓
            </span>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#111315" }}>Message sent</p>
            <p className="zahi-body" style={{ fontSize: 13 }}>
              Thanks for writing in. We reply within one business day, PKT.
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Your name" style={fieldStyle} />
              <input required type="email" placeholder="Work email" style={fieldStyle} />
            </div>
            <input placeholder="Store or company (optional)" style={fieldStyle} />
            <textarea
              required
              rows={6}
              placeholder="How can we help?"
              style={{ ...fieldStyle, borderRadius: 20, resize: "vertical", minHeight: 140 }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full"
              style={{
                padding: "15px 26px",
                fontSize: 12,
                fontWeight: 600,
                background: "#111315",
                color: "#ffffff",
                width: "fit-content",
              }}
            >
              Send message
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </main>
  );
}