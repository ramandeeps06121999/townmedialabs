import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "SEO Agency in Charlotte",
  description: "TML offers expert SEO services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo charlotte", "seo agency charlotte", "seo company charlotte"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-charlotte",
  },
  openGraph: {
    title: "SEO Agency in Charlotte",
    description: "TML offers expert SEO services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-charlotte",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Charlotte" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Charlotte",
    description: "TML offers expert SEO services in Charlotte. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCharlottePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
