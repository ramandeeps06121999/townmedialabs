import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Southampton | TML Agency",
  description: "TML offers expert graphic design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design southampton", "graphic design agency southampton", "graphic design company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-southampton",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Southampton | TML Agency",
    description: "TML offers expert graphic design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Southampton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Southampton | TML Agency",
    description: "TML offers expert graphic design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
