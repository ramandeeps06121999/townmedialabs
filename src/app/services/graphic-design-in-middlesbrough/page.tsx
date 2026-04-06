import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Middlesbrough",
  description: "TML offers expert Graphic Design services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design middlesbrough", "graphic design agency middlesbrough", "graphic design company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-middlesbrough",
  },
  openGraph: {
    title: "Graphic Design Agency in Middlesbrough",
    description: "TML offers expert Graphic Design services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Middlesbrough",
    description: "TML offers expert Graphic Design services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
