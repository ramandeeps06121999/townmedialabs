import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "SEO Agency in Liverpool",
  description: "TML offers expert SEO services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo liverpool", "seo agency liverpool", "seo company liverpool"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-liverpool",
  },
  openGraph: {
    title: "SEO Agency in Liverpool",
    description: "TML offers expert SEO services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-liverpool",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Liverpool" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Liverpool",
    description: "TML offers expert SEO services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLiverpoolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
