import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Mohali",
  description: "TML offers expert Graphic Design services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design mohali", "graphic design agency mohali", "graphic design company mohali"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-mohali",
  },
  openGraph: {
    title: "Graphic Design Agency in Mohali",
    description: "TML offers expert Graphic Design services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Mohali",
    description: "TML offers expert Graphic Design services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInMohaliPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
