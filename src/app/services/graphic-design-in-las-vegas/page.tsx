import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Las Vegas | TML Agency",
  description: "TML offers expert graphic design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design las vegas", "graphic design agency las vegas", "graphic design company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-las-vegas",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Las Vegas | TML Agency",
    description: "TML offers expert graphic design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Las Vegas | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Las Vegas | TML Agency",
    description: "TML offers expert graphic design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
