import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Wellington",
  description: "TML offers expert Graphic Design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design wellington", "graphic design agency wellington", "graphic design wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wellington",
  },
  openGraph: {
    title: "Graphic Design Agency in Wellington",
    description: "TML offers expert Graphic Design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wellington" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Wellington",
    description: "TML offers expert Graphic Design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWellingtonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
