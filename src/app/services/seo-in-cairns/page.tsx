import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "SEO Agency in Cairns",
  description: "TML offers expert SEO services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cairns", "seo agency cairns", "seo company cairns"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-cairns",
  },
  openGraph: {
    title: "SEO Agency in Cairns",
    description: "TML offers expert SEO services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-cairns",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cairns" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Cairns",
    description: "TML offers expert SEO services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCairnsPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
