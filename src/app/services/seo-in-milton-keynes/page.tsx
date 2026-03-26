import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Milton Keynes | TML Agency",
  description: "TML offers expert seo services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo milton keynes", "seo agency milton keynes", "seo company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-milton-keynes",
  },
  openGraph: {
    title: "Best SEO Agency in Milton Keynes | TML Agency",
    description: "TML offers expert seo services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Milton Keynes | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Milton Keynes | TML Agency",
    description: "TML offers expert seo services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
