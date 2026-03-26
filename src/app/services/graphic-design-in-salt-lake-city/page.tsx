import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Salt Lake City | TML Agency",
  description: "TML offers expert graphic design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design salt lake city", "graphic design agency salt lake city", "graphic design company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-salt-lake-city",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Salt Lake City | TML Agency",
    description: "TML offers expert graphic design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Salt Lake City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Salt Lake City | TML Agency",
    description: "TML offers expert graphic design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
