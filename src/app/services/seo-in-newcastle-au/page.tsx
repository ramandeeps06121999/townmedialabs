import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "SEO Agency in Newcastle",
  description: "TML offers expert SEO services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo newcastle", "seo agency newcastle", "seo company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-newcastle-au",
  },
  openGraph: {
    title: "SEO Agency in Newcastle",
    description: "TML offers expert SEO services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-newcastle-au",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Newcastle",
    description: "TML offers expert SEO services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNewcastleAuPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
