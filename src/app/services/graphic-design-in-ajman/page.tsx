import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Ajman",
  description: "TML offers expert Graphic Design services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design ajman", "graphic design agency ajman", "graphic design company ajman"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-ajman",
  },
  openGraph: {
    title: "Graphic Design Agency in Ajman",
    description: "TML offers expert Graphic Design services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Ajman" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Ajman",
    description: "TML offers expert Graphic Design services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInAjmanPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
