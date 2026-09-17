"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
    }, 900);
  }

  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto flex min-h-[100svh] max-w-[1560px] flex-col px-5 py-7 sm:px-7 sm:py-9 lg:px-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[22px] font-medium leading-none tracking-[-0.055em]"
          >
            zahi<span className="text-ember-orange">.</span>
          </Link>

          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.12em] text-pewter transition-colors hover:text-ember-orange"
          >
            Back to site
          </Link>
        </header>

        <section className="flex flex-1 items-center py-20">
          <div className="grid w-full gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                  Welcome back
                </p>

                <h1 className="mt-8 max-w-[700px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[100px]">
                  Your store,
                  <br />
                  <span className="text-pewter">your workspace.</span>
                </h1>
              </div>

              <div className="mt-14 hidden border-t border-black/10 pt-6 dark:border-white/10 lg:block">
                <p className="max-w-[280px] text-[11px] leading-[1.7] text-pewter">
                  Sign in to manage your virtual try-on workflow and product
                  experiences.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full max-w-[520px] lg:ml-auto">
                <div className="rounded-[28px] border border-black/10 bg-canvas-white p-7 dark:border-white/10 dark:bg-coal-light sm:p-9">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                        Account
                      </p>

                      <h2 className="mt-2 text-[28px] font-medium tracking-[-0.03em]">
                        Sign in
                      </h2>
                    </div>

                    <span className="text-[10px] text-ember-orange">
                      zahi.
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-9 space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] uppercase tracking-[0.1em] text-pewter"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="h-14 w-full rounded-full border border-black/10 bg-transparent px-5 text-[14px] outline-none transition-colors placeholder:text-pewter focus:border-ember-orange dark:border-white/10"
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-[10px] uppercase tracking-[0.1em] text-pewter"
                        >
                          Password
                        </label>

                        <button
                          type="button"
                          className="text-[10px] text-pewter transition-colors hover:text-ember-orange"
                        >
                          Forgot password?
                        </button>
                      </div>

                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className="h-14 w-full rounded-full border border-black/10 bg-transparent px-5 text-[14px] outline-none transition-colors placeholder:text-pewter focus:border-ember-orange dark:border-white/10"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2 flex h-14 w-full items-center justify-center rounded-full bg-ink-black text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-ink-black"
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </form>

                  <div className="my-7 flex items-center gap-4">
                    <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />

                    <span className="text-[9px] uppercase tracking-[0.12em] text-pewter">
                      or
                    </span>

                    <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
                  </div>

                  <button
                    type="button"
                    className="flex h-14 w-full items-center justify-center gap-3 rounded-full border border-black/10 text-[11px] font-medium transition-colors hover:border-ember-orange hover:text-ember-orange dark:border-white/10"
                  >
                    <span className="text-[13px] font-semibold">G</span>
                    Continue with Google
                  </button>

                  <p className="mt-7 text-center text-[11px] text-pewter">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/#start"
                      className="font-medium text-ink-black underline decoration-black/20 underline-offset-4 transition-colors hover:text-ember-orange dark:text-white dark:decoration-white/20"
                    >
                      Get started
                    </Link>
                  </p>
                </div>

                <p className="mt-6 text-center text-[9px] leading-[1.6] text-pewter">
                  By continuing, you agree to zahi&apos;s terms and privacy
                  policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-black/10 pt-5 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>AI-powered virtual try-on</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}