import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Los Angeles",
  description: "TML offers expert Graphic Design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design los angeles", "graphic design agency los angeles", "graphic design company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-los-angeles",
  },
  openGraph: {
    title: "Graphic Design Agency in Los Angeles",
    description: "TML offers expert Graphic Design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Los Angeles",
    description: "TML offers expert Graphic Design services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
