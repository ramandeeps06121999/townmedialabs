import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "SEO Agency in Sunderland",
  description: "TML offers expert SEO services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sunderland", "seo agency sunderland", "seo company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sunderland",
  },
  openGraph: {
    title: "SEO Agency in Sunderland",
    description: "TML offers expert SEO services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sunderland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Sunderland",
    description: "TML offers expert SEO services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSunderlandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
