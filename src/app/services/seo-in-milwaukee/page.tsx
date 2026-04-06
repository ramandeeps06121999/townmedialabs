import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "SEO Agency in Milwaukee",
  description: "TML offers expert SEO services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo milwaukee", "seo agency milwaukee", "seo company milwaukee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-milwaukee",
  },
  openGraph: {
    title: "SEO Agency in Milwaukee",
    description: "TML offers expert SEO services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-milwaukee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Milwaukee" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Milwaukee",
    description: "TML offers expert SEO services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMilwaukeePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
