import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Raleigh",
  description: "TML offers expert Graphic Design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design raleigh", "graphic design agency raleigh", "graphic design company raleigh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-raleigh",
  },
  openGraph: {
    title: "Graphic Design Agency in Raleigh",
    description: "TML offers expert Graphic Design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-raleigh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Raleigh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Raleigh",
    description: "TML offers expert Graphic Design services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInRaleighPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
