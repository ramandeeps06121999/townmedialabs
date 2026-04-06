import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Bath",
  description: "TML offers expert Graphic Design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bath", "graphic design agency bath", "graphic design company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-bath",
  },
  openGraph: {
    title: "Graphic Design Agency in Bath",
    description: "TML offers expert Graphic Design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Bath" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Bath",
    description: "TML offers expert Graphic Design services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBathPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
