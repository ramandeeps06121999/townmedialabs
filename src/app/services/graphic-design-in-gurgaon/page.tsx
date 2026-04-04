import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Gurgaon | TML Agency",
  description: "TML offers expert graphic design services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design gurgaon", "graphic design agency gurgaon", "graphic design company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-gurgaon",
  },
  openGraph: {
    title: "Graphic Design Agency in Gurgaon | TML Agency",
    description: "TML offers expert graphic design services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Gurgaon | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Gurgaon | TML Agency",
    description: "TML offers expert graphic design services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
