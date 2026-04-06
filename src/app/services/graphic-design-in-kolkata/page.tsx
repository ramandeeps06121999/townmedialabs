import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Kolkata",
  description: "TML offers expert Graphic Design services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design kolkata", "graphic design agency kolkata", "graphic design company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-kolkata",
  },
  openGraph: {
    title: "Graphic Design Agency in Kolkata",
    description: "TML offers expert Graphic Design services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Kolkata",
    description: "TML offers expert Graphic Design services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
