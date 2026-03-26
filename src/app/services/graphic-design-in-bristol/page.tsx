import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Bristol | TML Agency",
  description: "TML offers expert graphic design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bristol", "graphic design agency bristol", "graphic design company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-bristol",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Bristol | TML Agency",
    description: "TML offers expert graphic design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Bristol | TML Agency",
    description: "TML offers expert graphic design services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
