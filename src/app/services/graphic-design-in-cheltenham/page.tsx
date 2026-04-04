import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Cheltenham | TML Agency",
  description: "TML offers expert graphic design services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design cheltenham", "graphic design agency cheltenham", "graphic design company cheltenham"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-cheltenham",
  },
  openGraph: {
    title: "Graphic Design Agency in Cheltenham | TML Agency",
    description: "TML offers expert graphic design services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-cheltenham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Cheltenham | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Cheltenham | TML Agency",
    description: "TML offers expert graphic design services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
