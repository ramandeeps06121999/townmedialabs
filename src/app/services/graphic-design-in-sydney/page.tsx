import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Sydney | TML Agency",
  description: "TML offers expert graphic design services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design sydney", "graphic design agency sydney", "graphic design company sydney"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-sydney",
  },
  openGraph: {
    title: "Graphic Design Agency in Sydney | TML Agency",
    description: "TML offers expert graphic design services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Sydney | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Sydney | TML Agency",
    description: "TML offers expert graphic design services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
