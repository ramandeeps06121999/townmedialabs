import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Chicago",
  description: "TML offers expert Graphic Design services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design chicago", "graphic design agency chicago", "graphic design company chicago"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-chicago",
  },
  openGraph: {
    title: "Graphic Design Agency in Chicago",
    description: "TML offers expert Graphic Design services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-chicago",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Chicago" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Chicago",
    description: "TML offers expert Graphic Design services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInChicagoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
