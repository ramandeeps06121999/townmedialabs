import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bath | TML Agency",
  description: "TML offers expert graphic design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bath", "graphic design agency bath", "graphic design company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-bath",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Bath | TML Agency",
    description: "TML offers expert graphic design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Bath | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Bath | TML Agency",
    description: "TML offers expert graphic design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
