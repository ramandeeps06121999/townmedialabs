"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[10px] text-white/30 tracking-[0.25em] uppercase mb-6">
          Something went wrong
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
          Oops<span className="text-[#ff4500]">.</span>
        </h1>

        <p className="text-sm text-white/30 mb-10 max-w-sm mx-auto">
          An unexpected error occurred. Please try again or head back to the
          homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-8 py-4 rounded-full border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
