import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Milton Keynes | TML Agency",
  description: "TML offers expert packaging design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design milton keynes", "packaging design agency milton keynes", "packaging design company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-milton-keynes",
  },
  openGraph: {
    title: "Best Packaging Design Agency in Milton Keynes | TML Agency",
    description: "TML offers expert packaging design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Milton Keynes | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Packaging Design Agency in Milton Keynes | TML Agency",
    description: "TML offers expert packaging design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
