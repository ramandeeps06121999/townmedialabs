import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "SEO Agency in Townsville",
  description: "TML offers expert SEO services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo townsville", "seo agency townsville", "seo company townsville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-townsville",
  },
  openGraph: {
    title: "SEO Agency in Townsville",
    description: "TML offers expert SEO services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-townsville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Townsville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Townsville",
    description: "TML offers expert SEO services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInTownsvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
