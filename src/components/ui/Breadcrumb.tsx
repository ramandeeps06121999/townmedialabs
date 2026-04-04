"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  homeLabel?: string;
  className?: string;
}

/**
 * Generate breadcrumb schema for SEO
 */
function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Home icon SVG component
 */
function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

/**
 * Chevron right icon SVG component
 */
function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/**
 * Breadcrumb component with Schema.org BreadcrumbList structured data
 * 
 * Usage:
 * 1. With explicit items:
 *    <Breadcrumb items={[
 *      { name: "Home", url: "https://townmedialabs.ca" },
 *      { name: "Services", url: "https://townmedialabs.ca/services" },
 *      { name: "Branding", url: "https://townmedialabs.ca/services/branding" }
 *    ]} />
 * 
 * 2. Auto-generated from pathname (requires usePathname):
 *    <Breadcrumb />
 */
export default function Breadcrumb({
  items,
  homeLabel = "Home",
  className = "",
}: BreadcrumbProps) {
  const pathname = usePathname();
  
  // If items are not provided, generate from pathname
  const breadcrumbItems: BreadcrumbItem[] = items || (() => {
    if (!pathname) return [{ name: homeLabel, url: "https://townmedialabs.ca" }];
    
    const segments = pathname.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [{ name: homeLabel, url: "https://townmedialabs.ca" }];
    
    let currentPath = "";
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      // Format segment name: replace hyphens with spaces and capitalize
      const name = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      
      items.push({
        name,
        url: `https://townmedialabs.ca${currentPath}`,
      });
    });
    
    return items;
  })();

  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      {/* Schema.org BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Visual breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`w-full ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isHome = index === 0;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRightIcon className="mx-1 h-4 w-4 text-white flex-shrink-0" />
                )}
                
                {isLast ? (
                  // Current/Active page - styled with orange accent (#ff4500)
                  <span
                    className="font-medium text-[#ff4500] truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px]"
                    aria-current="page"
                  >
                    {isHome && <HomeIcon className="inline h-4 w-4 mr-1 -mt-0.5" />}
                    {item.name}
                  </span>
                ) : (
                  // Link to previous pages
                  <Link
                    href={item.url}
                    className="text-white hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {isHome && <HomeIcon className="inline h-4 w-4 mr-1 -mt-0.5" />}
                    <span className="truncate max-w-[150px] sm:max-w-[200px]">
                      {item.name}
                    </span>
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

/**
 * BreadcrumbSkeleton - Loading state for breadcrumb
 */
export function BreadcrumbSkeleton({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`w-full ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li className="h-4 w-12 bg-white/10 rounded animate-pulse" />
        <li className="h-4 w-4 bg-white/10 rounded animate-pulse" />
        <li className="h-4 w-20 bg-white/10 rounded animate-pulse" />
        <li className="h-4 w-4 bg-white/10 rounded animate-pulse" />
        <li className="h-4 w-24 bg-white/10 rounded animate-pulse" />
      </ol>
    </nav>
  );
}
