import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "SEO Agency in Austin",
  description: "TML offers expert SEO services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo austin", "seo agency austin", "seo company austin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-austin",
  },
  openGraph: {
    title: "SEO Agency in Austin",
    description: "TML offers expert SEO services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Austin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Austin",
    description: "TML offers expert SEO services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAustinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
