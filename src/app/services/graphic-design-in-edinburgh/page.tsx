import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Edinburgh",
  description: "TML offers expert Graphic Design services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design edinburgh", "graphic design agency edinburgh", "graphic design company edinburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-edinburgh",
  },
  openGraph: {
    title: "Graphic Design Agency in Edinburgh",
    description: "TML offers expert Graphic Design services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-edinburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Edinburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Edinburgh",
    description: "TML offers expert Graphic Design services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInEdinburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
