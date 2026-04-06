import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in San Jose",
  description: "TML offers expert Graphic Design services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design san jose", "graphic design agency san jose", "graphic design company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-san-jose",
  },
  openGraph: {
    title: "Graphic Design Agency in San Jose",
    description: "TML offers expert Graphic Design services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in San Jose" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in San Jose",
    description: "TML offers expert Graphic Design services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInSanJosePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
