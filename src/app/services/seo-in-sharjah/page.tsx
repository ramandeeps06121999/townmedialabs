import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sharjah | TML Agency",
  description: "TML offers expert seo services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sharjah", "seo agency sharjah", "seo company sharjah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-sharjah",
  },
  openGraph: {
    title: "Best SEO Agency in Sharjah | TML Agency",
    description: "TML offers expert seo services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-sharjah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sharjah | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Sharjah | TML Agency",
    description: "TML offers expert seo services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
