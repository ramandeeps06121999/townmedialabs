import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Bendigo",
  description: "TML offers expert Graphic Design services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design bendigo", "graphic design agency bendigo", "graphic design company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-bendigo",
  },
  openGraph: {
    title: "Graphic Design Agency in Bendigo",
    description: "TML offers expert Graphic Design services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Bendigo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Bendigo",
    description: "TML offers expert Graphic Design services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBendigoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
