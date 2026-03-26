import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wellington | TML Agency",
  description: "TML offers expert graphic design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design wellington", "graphic design agency wellington", "graphic design wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wellington",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Wellington | TML Agency",
    description: "TML offers expert graphic design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Wellington | TML Agency",
    description: "TML offers expert graphic design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
