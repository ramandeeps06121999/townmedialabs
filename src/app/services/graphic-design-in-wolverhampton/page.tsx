import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Wolverhampton",
  description: "TML offers expert Graphic Design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design wolverhampton", "graphic design agency wolverhampton", "graphic design company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wolverhampton",
  },
  openGraph: {
    title: "Graphic Design Agency in Wolverhampton",
    description: "TML offers expert Graphic Design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Wolverhampton",
    description: "TML offers expert Graphic Design services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
