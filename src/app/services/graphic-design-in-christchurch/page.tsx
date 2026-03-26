import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Christchurch | TML Agency",
  description: "TML offers expert graphic design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design christchurch", "graphic design agency christchurch", "graphic design christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-christchurch",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Christchurch | TML Agency",
    description: "TML offers expert graphic design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Christchurch | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Christchurch | TML Agency",
    description: "TML offers expert graphic design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
