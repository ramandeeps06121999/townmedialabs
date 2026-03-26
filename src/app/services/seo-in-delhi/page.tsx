import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Delhi | TML Agency",
  description: "TML offers expert seo services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo delhi", "seo agency delhi", "seo company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-delhi",
  },
  openGraph: {
    title: "Best SEO Agency in Delhi | TML Agency",
    description: "TML offers expert seo services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Delhi | TML Agency",
    description: "TML offers expert seo services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
