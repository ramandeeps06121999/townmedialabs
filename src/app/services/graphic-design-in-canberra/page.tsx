import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Canberra",
  description: "TML offers expert Graphic Design services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design canberra", "graphic design agency canberra", "graphic design company canberra"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-canberra",
  },
  openGraph: {
    title: "Graphic Design Agency in Canberra",
    description: "TML offers expert Graphic Design services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Canberra" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Canberra",
    description: "TML offers expert Graphic Design services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInCanberraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
