import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Indianapolis",
  description: "TML offers expert Graphic Design services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design indianapolis", "graphic design agency indianapolis", "graphic design company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-indianapolis",
  },
  openGraph: {
    title: "Graphic Design Agency in Indianapolis",
    description: "TML offers expert Graphic Design services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Indianapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Indianapolis",
    description: "TML offers expert Graphic Design services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInIndianapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
