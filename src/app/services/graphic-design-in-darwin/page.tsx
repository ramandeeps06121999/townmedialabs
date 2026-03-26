import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Darwin | TML Agency",
  description: "TML offers expert graphic design services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design darwin", "graphic design agency darwin", "graphic design company darwin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-darwin",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Darwin | TML Agency",
    description: "TML offers expert graphic design services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-darwin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Darwin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Darwin | TML Agency",
    description: "TML offers expert graphic design services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
