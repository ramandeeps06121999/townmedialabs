import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Omaha | TML Agency",
  description: "TML offers expert graphic design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design omaha", "graphic design agency omaha", "graphic design company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-omaha",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Omaha | TML Agency",
    description: "TML offers expert graphic design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Omaha | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Omaha | TML Agency",
    description: "TML offers expert graphic design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
