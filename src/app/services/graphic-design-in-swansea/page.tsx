import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Swansea",
  description: "TML offers expert Graphic Design services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design swansea", "graphic design agency swansea", "graphic design company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-swansea",
  },
  openGraph: {
    title: "Graphic Design Agency in Swansea",
    description: "TML offers expert Graphic Design services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Swansea",
    description: "TML offers expert Graphic Design services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
