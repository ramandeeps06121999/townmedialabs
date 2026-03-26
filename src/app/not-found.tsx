import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[10px] text-white/30 tracking-[0.25em] uppercase mb-6">
          Error 404
        </p>

        <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4 tracking-tight">
          4<span className="text-[#ff4500]">0</span>4
        </h1>

        <p className="text-lg text-white/90 mb-2">Page not found</p>
        <p className="text-sm text-white/30 mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
