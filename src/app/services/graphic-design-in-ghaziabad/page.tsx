import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ghaziabad | TML Agency",
  description: "TML offers expert graphic design services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ghaziabad", "graphic design agency ghaziabad", "graphic design company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-ghaziabad",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Ghaziabad | TML Agency",
    description: "TML offers expert graphic design services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Ghaziabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Ghaziabad | TML Agency",
    description: "TML offers expert graphic design services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
