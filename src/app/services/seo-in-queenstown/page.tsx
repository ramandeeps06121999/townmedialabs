import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "SEO Agency in Queenstown",
  description: "TML offers expert SEO services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo queenstown", "seo agency queenstown", "seo queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-queenstown",
  },
  openGraph: {
    title: "SEO Agency in Queenstown",
    description: "TML offers expert SEO services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Queenstown" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Queenstown",
    description: "TML offers expert SEO services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInQueenstownPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
