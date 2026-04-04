import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert graphic design services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design visakhapatnam", "graphic design agency visakhapatnam", "graphic design company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-visakhapatnam",
  },
  openGraph: {
    title: "Graphic Design Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert graphic design services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert graphic design services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
