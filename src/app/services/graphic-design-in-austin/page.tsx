import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Austin | TML Agency",
  description: "TML offers expert graphic design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design austin", "graphic design agency austin", "graphic design company austin"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-austin",
  },
  openGraph: {
    title: "Graphic Design Agency in Austin | TML Agency",
    description: "TML offers expert graphic design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Austin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Austin | TML Agency",
    description: "TML offers expert graphic design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
