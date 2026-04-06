import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Branding Agency in Milton Keynes",
  description: "TML offers expert Branding services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding milton keynes", "branding agency milton keynes", "branding company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-milton-keynes",
  },
  openGraph: {
    title: "Branding Agency in Milton Keynes",
    description: "TML offers expert Branding services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Milton Keynes",
    description: "TML offers expert Branding services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
