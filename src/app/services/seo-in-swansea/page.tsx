import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "SEO Agency in Swansea",
  description: "TML offers expert SEO services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo swansea", "seo agency swansea", "seo company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-swansea",
  },
  openGraph: {
    title: "SEO Agency in Swansea",
    description: "TML offers expert SEO services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Swansea",
    description: "TML offers expert SEO services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
