import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "SEO Agency in Manchester",
  description: "TML offers expert SEO services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo manchester", "seo agency manchester", "seo company manchester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-manchester",
  },
  openGraph: {
    title: "SEO Agency in Manchester",
    description: "TML offers expert SEO services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Manchester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Manchester",
    description: "TML offers expert SEO services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInManchesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
