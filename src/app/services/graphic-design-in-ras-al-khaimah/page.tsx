import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert graphic design services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ras al khaimah", "graphic design agency ras al khaimah", "graphic design company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert graphic design services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Ras Al Khaimah | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert graphic design services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
