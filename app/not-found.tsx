"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 px-4 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-5xl font-bold mb-4">Oops! This page doesn&apos;t exist.</h1>
        <p className="text-base text-slate-600 dark:text-slate-300 mb-8">
          You will be redirected to the homepage in a few seconds. If you prefer, click the button below to go there right now.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition"
        >
          Take me home
        </Link>
      </div>
    </main>
  );
}
