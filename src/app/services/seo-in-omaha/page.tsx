import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "SEO Agency in Omaha",
  description: "TML offers expert SEO services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo omaha", "seo agency omaha", "seo company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-omaha",
  },
  openGraph: {
    title: "SEO Agency in Omaha",
    description: "TML offers expert SEO services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Omaha",
    description: "TML offers expert SEO services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
