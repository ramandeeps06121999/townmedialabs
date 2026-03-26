import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Hamilton | TML Agency",
  description: "TML offers expert graphic design services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design hamilton", "graphic design agency hamilton", "graphic design hamilton nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-hamilton",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Hamilton | TML Agency",
    description: "TML offers expert graphic design services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Hamilton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Hamilton | TML Agency",
    description: "TML offers expert graphic design services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
