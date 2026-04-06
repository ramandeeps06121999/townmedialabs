import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "SEO Agency in Honolulu",
  description: "TML offers expert SEO services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo honolulu", "seo agency honolulu", "seo company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-honolulu",
  },
  openGraph: {
    title: "SEO Agency in Honolulu",
    description: "TML offers expert SEO services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Honolulu" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Honolulu",
    description: "TML offers expert SEO services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInHonoluluPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
