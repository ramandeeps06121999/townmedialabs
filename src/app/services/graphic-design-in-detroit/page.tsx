import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Detroit | TML Agency",
  description: "TML offers expert graphic design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design detroit", "graphic design agency detroit", "graphic design company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-detroit",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Detroit | TML Agency",
    description: "TML offers expert graphic design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Detroit | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Detroit | TML Agency",
    description: "TML offers expert graphic design services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
