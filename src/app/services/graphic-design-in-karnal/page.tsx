import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Karnal",
  description: "TML offers expert Graphic Design services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design karnal", "graphic design agency karnal", "graphic design company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-karnal",
  },
  openGraph: {
    title: "Graphic Design Agency in Karnal",
    description: "TML offers expert Graphic Design services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Karnal",
    description: "TML offers expert Graphic Design services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
