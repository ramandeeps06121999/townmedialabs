import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Salt Lake City",
  description: "TML offers expert Graphic Design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design salt lake city", "graphic design agency salt lake city", "graphic design company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-salt-lake-city",
  },
  openGraph: {
    title: "Graphic Design Agency in Salt Lake City",
    description: "TML offers expert Graphic Design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Salt Lake City",
    description: "TML offers expert Graphic Design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
