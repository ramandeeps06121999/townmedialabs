import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Lucknow",
  description: "TML offers expert Graphic Design services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design lucknow", "graphic design agency lucknow", "graphic design company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-lucknow",
  },
  openGraph: {
    title: "Graphic Design Agency in Lucknow",
    description: "TML offers expert Graphic Design services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Lucknow",
    description: "TML offers expert Graphic Design services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
