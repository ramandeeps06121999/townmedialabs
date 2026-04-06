import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Ipswich",
  description: "TML offers expert Graphic Design services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ipswich", "graphic design agency ipswich", "graphic design company ipswich"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-ipswich",
  },
  openGraph: {
    title: "Graphic Design Agency in Ipswich",
    description: "TML offers expert Graphic Design services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-ipswich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Ipswich" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Ipswich",
    description: "TML offers expert Graphic Design services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInIpswichPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
