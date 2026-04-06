import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Packaging Design Agency in Milton Keynes",
  description: "TML offers expert Packaging Design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design milton keynes", "packaging design agency milton keynes", "packaging design company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-milton-keynes",
  },
  openGraph: {
    title: "Packaging Design Agency in Milton Keynes",
    description: "TML offers expert Packaging Design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Packaging Design Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Packaging Design Agency in Milton Keynes",
    description: "TML offers expert Packaging Design services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingPackagingInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
