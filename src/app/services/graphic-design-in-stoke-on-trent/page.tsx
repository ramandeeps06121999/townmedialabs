import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert graphic design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design stoke-on-trent", "graphic design agency stoke-on-trent", "graphic design company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-stoke-on-trent",
  },
  openGraph: {
    title: "Graphic Design Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert graphic design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Stoke-on-Trent | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Stoke-on-Trent | TML Agency",
    description: "TML offers expert graphic design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
