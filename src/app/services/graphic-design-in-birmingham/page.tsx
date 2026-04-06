import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Birmingham",
  description: "TML offers expert Graphic Design services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design birmingham", "graphic design agency birmingham", "graphic design company birmingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-birmingham",
  },
  openGraph: {
    title: "Graphic Design Agency in Birmingham",
    description: "TML offers expert Graphic Design services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-birmingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Birmingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Birmingham",
    description: "TML offers expert Graphic Design services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInBirminghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
