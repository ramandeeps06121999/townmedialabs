import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Chennai | TML Agency",
  description: "TML offers expert graphic design services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design chennai", "graphic design agency chennai", "graphic design company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-chennai",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Chennai | TML Agency",
    description: "TML offers expert graphic design services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Chennai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Chennai | TML Agency",
    description: "TML offers expert graphic design services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
