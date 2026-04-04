import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Jacksonville | TML Agency",
  description: "TML offers expert graphic design services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design jacksonville", "graphic design agency jacksonville", "graphic design company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-jacksonville",
  },
  openGraph: {
    title: "Graphic Design Agency in Jacksonville | TML Agency",
    description: "TML offers expert graphic design services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Jacksonville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Jacksonville | TML Agency",
    description: "TML offers expert graphic design services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
