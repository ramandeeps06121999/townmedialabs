import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Tauranga | TML Agency",
  description: "TML offers expert seo services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo tauranga", "seo agency tauranga", "seo tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-tauranga",
  },
  openGraph: {
    title: "Best SEO Agency in Tauranga | TML Agency",
    description: "TML offers expert seo services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Tauranga | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Tauranga | TML Agency",
    description: "TML offers expert seo services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
