"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs component - Legacy visual-only version
 * Schema is handled by the Breadcrumb.tsx component or page-level schema to avoid duplicates.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      {/* Visual breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="border-l-2 border-[#ff4500]/30 pl-3">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isCurrent = !item.href || isLast;

            return (
              <li key={index} className="flex items-center gap-1.5 text-[11px]">
                {index > 0 && (
                  <span className="text-white/20 select-none" aria-hidden="true">
                    /
                  </span>
                )}
                {isCurrent ? (
                  // Current/Active page - styled with orange accent (#ff4500)
                  <span className="text-[#ff4500] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/30 transition-colors duration-200 hover:text-white/90"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
