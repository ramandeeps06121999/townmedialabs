import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Al Ain",
  description: "TML offers expert Graphic Design services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design al ain", "graphic design agency al ain", "graphic design company al ain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-al-ain",
  },
  openGraph: {
    title: "Graphic Design Agency in Al Ain",
    description: "TML offers expert Graphic Design services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Al Ain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Al Ain",
    description: "TML offers expert Graphic Design services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInAlAinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
