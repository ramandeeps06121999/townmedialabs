import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in London | TML Agency",
  description: "TML offers expert graphic design services in London. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design london", "graphic design agency london", "graphic design company london"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-london",
  },
  openGraph: {
    title: "Graphic Design Agency in London | TML Agency",
    description: "TML offers expert graphic design services in London. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-london",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in London | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in London | TML Agency",
    description: "TML offers expert graphic design services in London. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
