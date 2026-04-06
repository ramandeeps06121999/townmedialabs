import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "SEO Agency in Kharar",
  description: "TML offers expert Search Engine Optimization services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kharar", "search engine optimization agency kharar", "search engine optimization company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-kharar",
  },
  openGraph: {
    title: "SEO Agency in Kharar",
    description: "TML offers expert Search Engine Optimization services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Kharar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Kharar",
    description: "TML offers expert Search Engine Optimization services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKhararPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
