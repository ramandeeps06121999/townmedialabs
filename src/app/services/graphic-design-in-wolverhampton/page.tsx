import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Wolverhampton | TML Agency",
  description: "TML offers expert graphic design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design wolverhampton", "graphic design agency wolverhampton", "graphic design company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wolverhampton",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Wolverhampton | TML Agency",
    description: "TML offers expert graphic design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wolverhampton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Wolverhampton | TML Agency",
    description: "TML offers expert graphic design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
