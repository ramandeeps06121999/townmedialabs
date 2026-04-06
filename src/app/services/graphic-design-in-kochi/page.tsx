import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Kochi",
  description: "TML offers expert Graphic Design services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design kochi", "graphic design agency kochi", "graphic design company kochi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-kochi",
  },
  openGraph: {
    title: "Graphic Design Agency in Kochi",
    description: "TML offers expert Graphic Design services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Kochi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Kochi",
    description: "TML offers expert Graphic Design services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInKochiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
