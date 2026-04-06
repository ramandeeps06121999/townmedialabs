import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Houston",
  description: "TML offers expert Graphic Design services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design houston", "graphic design agency houston", "graphic design company houston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-houston",
  },
  openGraph: {
    title: "Graphic Design Agency in Houston",
    description: "TML offers expert Graphic Design services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-houston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Houston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Houston",
    description: "TML offers expert Graphic Design services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInHoustonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
