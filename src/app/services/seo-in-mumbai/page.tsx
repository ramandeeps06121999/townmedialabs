import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "SEO Agency in Mumbai",
  description: "TML offers expert SEO services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo mumbai", "seo agency mumbai", "seo company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-mumbai",
  },
  openGraph: {
    title: "SEO Agency in Mumbai",
    description: "TML offers expert SEO services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Mumbai",
    description: "TML offers expert SEO services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
