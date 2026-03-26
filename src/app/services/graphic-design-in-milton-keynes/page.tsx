import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Graphic Design Agency in Milton Keynes | TML Agency",
  description: "TML offers expert graphic design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design milton keynes", "graphic design agency milton keynes", "graphic design company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/graphic-design-in-milton-keynes",
  },
  openGraph: {
    title: "Best Graphic Design Agency in Milton Keynes | TML Agency",
    description: "TML offers expert graphic design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/graphic-design-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Milton Keynes | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Graphic Design Agency in Milton Keynes | TML Agency",
    description: "TML offers expert graphic design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicDesignInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
