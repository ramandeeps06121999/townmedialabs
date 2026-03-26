import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in York | TML Agency",
  description: "TML offers expert graphic design services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design york", "graphic design agency york", "graphic design company york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-york",
  },
  openGraph: {
    title: "Best Graphic Design Agency in York | TML Agency",
    description: "TML offers expert graphic design services in York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in York | TML Agency",
    description: "TML offers expert graphic design services in York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
