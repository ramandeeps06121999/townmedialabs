import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "SEO Agency in Sunderland | TML Agency",
  description: "TML offers expert seo services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sunderland", "seo agency sunderland", "seo company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-sunderland",
  },
  openGraph: {
    title: "SEO Agency in Sunderland | TML Agency",
    description: "TML offers expert seo services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sunderland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Sunderland | TML Agency",
    description: "TML offers expert seo services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
