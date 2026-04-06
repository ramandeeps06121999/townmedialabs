import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "SEO Agency in Abu Dhabi",
  description: "TML offers expert SEO services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo abu dhabi", "seo agency abu dhabi", "seo company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-abu-dhabi",
  },
  openGraph: {
    title: "SEO Agency in Abu Dhabi",
    description: "TML offers expert SEO services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Abu Dhabi",
    description: "TML offers expert SEO services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
