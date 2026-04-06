import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in St. Louis",
  description: "TML offers expert Graphic Design services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design st. louis", "graphic design agency st. louis", "graphic design company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-st-louis",
  },
  openGraph: {
    title: "Graphic Design Agency in St. Louis",
    description: "TML offers expert Graphic Design services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in St. Louis",
    description: "TML offers expert Graphic Design services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
