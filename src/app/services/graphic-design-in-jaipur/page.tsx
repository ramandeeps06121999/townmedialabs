import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Jaipur",
  description: "TML offers expert Graphic Design services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design jaipur", "graphic design agency jaipur", "graphic design company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-jaipur",
  },
  openGraph: {
    title: "Graphic Design Agency in Jaipur",
    description: "TML offers expert Graphic Design services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Jaipur",
    description: "TML offers expert Graphic Design services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
