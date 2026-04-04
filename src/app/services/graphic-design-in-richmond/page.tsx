import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Richmond | TML Agency",
  description: "TML offers expert graphic design services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design richmond", "graphic design agency richmond", "graphic design company richmond"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-richmond",
  },
  openGraph: {
    title: "Graphic Design Agency in Richmond | TML Agency",
    description: "TML offers expert graphic design services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-richmond",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Richmond | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Richmond | TML Agency",
    description: "TML offers expert graphic design services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
