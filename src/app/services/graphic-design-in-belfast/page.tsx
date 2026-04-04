import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Belfast | TML Agency",
  description: "TML offers expert graphic design services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design belfast", "graphic design agency belfast", "graphic design company belfast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-belfast",
  },
  openGraph: {
    title: "Graphic Design Agency in Belfast | TML Agency",
    description: "TML offers expert graphic design services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-belfast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Belfast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Belfast | TML Agency",
    description: "TML offers expert graphic design services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
