import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "SEO Agency in Bath",
  description: "TML offers expert SEO services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bath", "seo agency bath", "seo company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-bath",
  },
  openGraph: {
    title: "SEO Agency in Bath",
    description: "TML offers expert SEO services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bath" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Bath",
    description: "TML offers expert SEO services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBathPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
