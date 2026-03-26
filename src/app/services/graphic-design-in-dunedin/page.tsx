import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Dunedin | TML Agency",
  description: "TML offers expert graphic design services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["graphic design dunedin", "graphic design agency dunedin", "graphic design dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-dunedin",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Dunedin | TML Agency",
    description: "TML offers expert graphic design services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Dunedin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Dunedin | TML Agency",
    description: "TML offers expert graphic design services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInDunedinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
