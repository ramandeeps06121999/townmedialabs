import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in New York | TML Agency",
  description: "TML offers expert graphic design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design new york", "graphic design agency new york", "graphic design company new york"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-new-york",
  },
  openGraph: {
    title: "Graphic Design Agency in New York | TML Agency",
    description: "TML offers expert graphic design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in New York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in New York | TML Agency",
    description: "TML offers expert graphic design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
