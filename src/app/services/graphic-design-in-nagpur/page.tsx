import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Nagpur",
  description: "TML offers expert Graphic Design services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design nagpur", "graphic design agency nagpur", "graphic design company nagpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-nagpur",
  },
  openGraph: {
    title: "Graphic Design Agency in Nagpur",
    description: "TML offers expert Graphic Design services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-nagpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Nagpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Nagpur",
    description: "TML offers expert Graphic Design services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInNagpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
