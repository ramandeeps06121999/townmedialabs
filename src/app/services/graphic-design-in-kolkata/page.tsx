import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Kolkata | TML Agency",
  description: "TML offers expert graphic design services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design kolkata", "graphic design agency kolkata", "graphic design company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-kolkata",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Kolkata | TML Agency",
    description: "TML offers expert graphic design services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Kolkata | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Kolkata | TML Agency",
    description: "TML offers expert graphic design services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
