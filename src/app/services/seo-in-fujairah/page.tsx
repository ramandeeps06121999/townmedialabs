import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "SEO Agency in Fujairah",
  description: "TML offers expert SEO services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo fujairah", "seo agency fujairah", "seo company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-fujairah",
  },
  openGraph: {
    title: "SEO Agency in Fujairah",
    description: "TML offers expert SEO services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Fujairah",
    description: "TML offers expert SEO services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
