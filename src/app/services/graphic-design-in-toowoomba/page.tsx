import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Toowoomba",
  description: "TML offers expert Graphic Design services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design toowoomba", "graphic design agency toowoomba", "graphic design company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-toowoomba",
  },
  openGraph: {
    title: "Graphic Design Agency in Toowoomba",
    description: "TML offers expert Graphic Design services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Toowoomba" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Toowoomba",
    description: "TML offers expert Graphic Design services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInToowoombaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
