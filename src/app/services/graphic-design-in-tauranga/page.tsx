import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Tauranga",
  description: "TML offers expert Graphic Design services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design tauranga", "graphic design agency tauranga", "graphic design tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-tauranga",
  },
  openGraph: {
    title: "Graphic Design Agency in Tauranga",
    description: "TML offers expert Graphic Design services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Tauranga" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Tauranga",
    description: "TML offers expert Graphic Design services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInTaurangaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
