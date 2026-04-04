import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Glasgow | TML Agency",
  description: "TML offers expert graphic design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design glasgow", "graphic design agency glasgow", "graphic design company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-glasgow",
  },
  openGraph: {
    title: "Graphic Design Agency in Glasgow | TML Agency",
    description: "TML offers expert graphic design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Glasgow | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Glasgow | TML Agency",
    description: "TML offers expert graphic design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
