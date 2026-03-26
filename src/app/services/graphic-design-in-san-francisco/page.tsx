import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in San Francisco | TML Agency",
  description: "TML offers expert graphic design services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design san francisco", "graphic design agency san francisco", "graphic design company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-san-francisco",
  },
  openGraph: {
    title: "Best Graphic Design Agency in San Francisco | TML Agency",
    description: "TML offers expert graphic design services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in San Francisco | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in San Francisco | TML Agency",
    description: "TML offers expert graphic design services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
