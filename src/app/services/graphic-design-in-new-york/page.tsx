import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in New York",
  description: "TML offers expert Graphic Design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design new york", "graphic design agency new york", "graphic design company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-new-york",
  },
  openGraph: {
    title: "Graphic Design Agency in New York",
    description: "TML offers expert Graphic Design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in New York",
    description: "TML offers expert Graphic Design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
