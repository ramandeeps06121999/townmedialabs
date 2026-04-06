import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Newcastle",
  description: "TML offers expert Graphic Design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design newcastle", "graphic design agency newcastle", "graphic design company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-newcastle-au",
  },
  openGraph: {
    title: "Graphic Design Agency in Newcastle",
    description: "TML offers expert Graphic Design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-newcastle-au",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Newcastle",
    description: "TML offers expert Graphic Design services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInNewcastleAuPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
