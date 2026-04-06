import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in San Antonio",
  description: "TML offers expert Graphic Design services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design san antonio", "graphic design agency san antonio", "graphic design company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-san-antonio",
  },
  openGraph: {
    title: "Graphic Design Agency in San Antonio",
    description: "TML offers expert Graphic Design services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in San Antonio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in San Antonio",
    description: "TML offers expert Graphic Design services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSanAntonioPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
