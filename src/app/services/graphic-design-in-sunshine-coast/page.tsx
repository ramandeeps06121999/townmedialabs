import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Sunshine Coast",
  description: "TML offers expert Graphic Design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design sunshine coast", "graphic design agency sunshine coast", "graphic design company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-sunshine-coast",
  },
  openGraph: {
    title: "Graphic Design Agency in Sunshine Coast",
    description: "TML offers expert Graphic Design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Sunshine Coast",
    description: "TML offers expert Graphic Design services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
