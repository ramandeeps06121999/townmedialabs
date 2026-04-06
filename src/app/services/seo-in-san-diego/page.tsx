import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "SEO Agency in San Diego",
  description: "TML offers expert SEO services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo san diego", "seo agency san diego", "seo company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-san-diego",
  },
  openGraph: {
    title: "SEO Agency in San Diego",
    description: "TML offers expert SEO services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in San Diego",
    description: "TML offers expert SEO services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
