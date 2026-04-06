import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Coimbatore",
  description: "TML offers expert Graphic Design services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design coimbatore", "graphic design agency coimbatore", "graphic design company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-coimbatore",
  },
  openGraph: {
    title: "Graphic Design Agency in Coimbatore",
    description: "TML offers expert Graphic Design services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Coimbatore",
    description: "TML offers expert Graphic Design services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
