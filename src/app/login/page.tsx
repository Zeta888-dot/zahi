"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="w-full max-w-[400px]">
        <p className="text-[20px] font-medium">
          zahi<span className="text-ember-orange">.</span>
        </p>
        <h1 className="mt-8 text-[33px] leading-[1.05] tracking-[-0.02em]">
          Sign in to
          <br />
          <span className="text-pewter">your studio.</span>
        </h1>
        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/app");
          }}
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light"
          />
          <button type="submit" className="rounded-full bg-ink-black py-3 text-[14px] font-medium text-canvas-white dark:bg-canvas-white dark:text-ink-black">
            Continue
          </button>
        </form>
        <p className="mt-6 text-center text-[12px] text-pewter">
          Waitlist members get first access. No account yet? Join at the homepage.
        </p>
      </div>
    </main>
  );
}