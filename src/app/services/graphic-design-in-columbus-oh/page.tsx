import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Columbus | TML Agency",
  description: "TML offers expert graphic design services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design columbus", "graphic design agency columbus", "graphic design company columbus"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-columbus-oh",
  },
  openGraph: {
    title: "Graphic Design Agency in Columbus | TML Agency",
    description: "TML offers expert graphic design services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Columbus | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Columbus | TML Agency",
    description: "TML offers expert graphic design services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
