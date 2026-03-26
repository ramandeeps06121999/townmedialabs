import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in San Diego | TML Agency",
  description: "TML offers expert graphic design services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design san diego", "graphic design agency san diego", "graphic design company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-san-diego",
  },
  openGraph: {
    title: "Best Graphic Design Agency in San Diego | TML Agency",
    description: "TML offers expert graphic design services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in San Diego | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in San Diego | TML Agency",
    description: "TML offers expert graphic design services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
