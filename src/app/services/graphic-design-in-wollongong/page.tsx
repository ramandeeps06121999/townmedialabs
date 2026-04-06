import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Wollongong",
  description: "TML offers expert Graphic Design services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design wollongong", "graphic design agency wollongong", "graphic design company wollongong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-wollongong",
  },
  openGraph: {
    title: "Graphic Design Agency in Wollongong",
    description: "TML offers expert Graphic Design services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-wollongong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Wollongong",
    description: "TML offers expert Graphic Design services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInWollongongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
