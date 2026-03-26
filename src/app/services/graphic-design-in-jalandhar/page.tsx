import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Jalandhar | TML Agency",
  description: "TML offers expert graphic design services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design jalandhar", "graphic design agency jalandhar", "graphic design company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-jalandhar",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Jalandhar | TML Agency",
    description: "TML offers expert graphic design services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Jalandhar | TML Agency",
    description: "TML offers expert graphic design services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
