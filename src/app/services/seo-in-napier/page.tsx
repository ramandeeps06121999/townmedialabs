import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "SEO Agency in Napier",
  description: "TML offers expert SEO services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo napier", "seo agency napier", "seo napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-napier",
  },
  openGraph: {
    title: "SEO Agency in Napier",
    description: "TML offers expert SEO services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Napier",
    description: "TML offers expert SEO services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
