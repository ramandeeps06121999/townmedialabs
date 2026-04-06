import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Southampton",
  description: "TML offers expert Graphic Design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design southampton", "graphic design agency southampton", "graphic design company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-southampton",
  },
  openGraph: {
    title: "Graphic Design Agency in Southampton",
    description: "TML offers expert Graphic Design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Southampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Southampton",
    description: "TML offers expert Graphic Design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSouthamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
