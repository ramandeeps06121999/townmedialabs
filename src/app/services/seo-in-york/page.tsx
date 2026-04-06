import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["york"];

export const metadata: Metadata = {
  title: "SEO Agency in York",
  description: "TML offers expert SEO services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo york", "seo agency york", "seo company york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-york",
  },
  openGraph: {
    title: "SEO Agency in York",
    description: "TML offers expert SEO services in York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in York",
    description: "TML offers expert SEO services in York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
