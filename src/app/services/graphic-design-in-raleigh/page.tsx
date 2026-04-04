import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Raleigh | TML Agency",
  description: "TML offers expert graphic design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design raleigh", "graphic design agency raleigh", "graphic design company raleigh"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-raleigh",
  },
  openGraph: {
    title: "Graphic Design Agency in Raleigh | TML Agency",
    description: "TML offers expert graphic design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-raleigh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Raleigh | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Raleigh | TML Agency",
    description: "TML offers expert graphic design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
