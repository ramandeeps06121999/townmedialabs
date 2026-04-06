import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Ballarat",
  description: "TML offers expert Graphic Design services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ballarat", "graphic design agency ballarat", "graphic design company ballarat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-ballarat",
  },
  openGraph: {
    title: "Graphic Design Agency in Ballarat",
    description: "TML offers expert Graphic Design services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-ballarat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Ballarat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Ballarat",
    description: "TML offers expert Graphic Design services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBallaratPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
