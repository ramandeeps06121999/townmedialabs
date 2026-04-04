import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Minneapolis | TML Agency",
  description: "TML offers expert graphic design services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design minneapolis", "graphic design agency minneapolis", "graphic design company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-minneapolis",
  },
  openGraph: {
    title: "Graphic Design Agency in Minneapolis | TML Agency",
    description: "TML offers expert graphic design services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Minneapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Minneapolis | TML Agency",
    description: "TML offers expert graphic design services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
