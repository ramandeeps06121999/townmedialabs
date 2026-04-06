import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Omaha",
  description: "TML offers expert Graphic Design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design omaha", "graphic design agency omaha", "graphic design company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-omaha",
  },
  openGraph: {
    title: "Graphic Design Agency in Omaha",
    description: "TML offers expert Graphic Design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Omaha",
    description: "TML offers expert Graphic Design services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
