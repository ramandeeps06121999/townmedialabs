import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Hamilton",
  description: "TML offers expert Graphic Design services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["graphic design hamilton", "graphic design agency hamilton", "graphic design hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-hamilton",
  },
  openGraph: {
    title: "Graphic Design Agency in Hamilton",
    description: "TML offers expert Graphic Design services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Hamilton",
    description: "TML offers expert Graphic Design services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
