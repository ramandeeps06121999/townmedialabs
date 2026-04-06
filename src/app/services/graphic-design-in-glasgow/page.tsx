import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Glasgow",
  description: "TML offers expert Graphic Design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design glasgow", "graphic design agency glasgow", "graphic design company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-glasgow",
  },
  openGraph: {
    title: "Graphic Design Agency in Glasgow",
    description: "TML offers expert Graphic Design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Glasgow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Glasgow",
    description: "TML offers expert Graphic Design services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInGlasgowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
