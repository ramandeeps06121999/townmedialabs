import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Luton | TML Agency",
  description: "TML offers expert graphic design services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design luton", "graphic design agency luton", "graphic design company luton"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-luton-uk",
  },
  openGraph: {
    title: "Graphic Design Agency in Luton | TML Agency",
    description: "TML offers expert graphic design services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Luton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Luton | TML Agency",
    description: "TML offers expert graphic design services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
