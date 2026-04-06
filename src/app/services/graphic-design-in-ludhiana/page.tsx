import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Ludhiana",
  description: "TML offers expert Graphic Design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ludhiana", "graphic design agency ludhiana", "graphic design company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-ludhiana",
  },
  openGraph: {
    title: "Graphic Design Agency in Ludhiana",
    description: "TML offers expert Graphic Design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Ludhiana" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Ludhiana",
    description: "TML offers expert Graphic Design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInLudhianaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
