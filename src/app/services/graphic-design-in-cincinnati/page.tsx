import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Cincinnati",
  description: "TML offers expert Graphic Design services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design cincinnati", "graphic design agency cincinnati", "graphic design company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-cincinnati",
  },
  openGraph: {
    title: "Graphic Design Agency in Cincinnati",
    description: "TML offers expert Graphic Design services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Cincinnati" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Cincinnati",
    description: "TML offers expert Graphic Design services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInCincinnatiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
