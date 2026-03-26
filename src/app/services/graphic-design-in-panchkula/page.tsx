import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Panchkula | TML Agency",
  description: "TML offers expert graphic design services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design panchkula", "graphic design agency panchkula", "graphic design company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-panchkula",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Panchkula | TML Agency",
    description: "TML offers expert graphic design services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Panchkula | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Panchkula | TML Agency",
    description: "TML offers expert graphic design services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
