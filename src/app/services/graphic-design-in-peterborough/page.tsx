import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Peterborough | TML Agency",
  description: "TML offers expert graphic design services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design peterborough", "graphic design agency peterborough", "graphic design company peterborough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-peterborough",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Peterborough | TML Agency",
    description: "TML offers expert graphic design services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-peterborough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Peterborough | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Peterborough | TML Agency",
    description: "TML offers expert graphic design services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
