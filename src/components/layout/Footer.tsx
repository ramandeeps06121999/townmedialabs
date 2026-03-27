import { navLinks } from "@/data/navigation";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Marquee } from "@/components/ui/Marquee";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* Big marquee text */}
      <div className="overflow-hidden py-12 opacity-[0.03]">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-[8rem] font-bold leading-none tracking-tighter text-white md:text-[12rem]"
            >
              TML AGENCY
            </span>
          ))}
        </Marquee>
      </div>

      <RevealOnScroll>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 pb-12 md:flex-row">
          <div>
            <span className="font-display text-xl font-bold text-white">
              TML
            </span>
            <p className="mt-2 text-sm text-[#444]">
              Full-service branding & digital marketing agency.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="animated-underline text-xs font-medium tracking-wide text-[#444] uppercase transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-[#333]">
            &copy; {new Date().getFullYear()} TML. All rights reserved.
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
