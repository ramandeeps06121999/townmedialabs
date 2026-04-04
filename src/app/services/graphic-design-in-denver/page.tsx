import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Denver | TML Agency",
  description: "TML offers expert graphic design services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design denver", "graphic design agency denver", "graphic design company denver"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-denver",
  },
  openGraph: {
    title: "Graphic Design Agency in Denver | TML Agency",
    description: "TML offers expert graphic design services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-denver",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Denver | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Denver | TML Agency",
    description: "TML offers expert graphic design services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
