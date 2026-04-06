import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Jalandhar",
  description: "TML offers expert Graphic Design services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design jalandhar", "graphic design agency jalandhar", "graphic design company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-jalandhar",
  },
  openGraph: {
    title: "Graphic Design Agency in Jalandhar",
    description: "TML offers expert Graphic Design services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Jalandhar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Jalandhar",
    description: "TML offers expert Graphic Design services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInJalandharPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
