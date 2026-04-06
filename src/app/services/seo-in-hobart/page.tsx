import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "SEO Agency in Hobart",
  description: "TML offers expert SEO services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo hobart", "seo agency hobart", "seo company hobart"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-hobart",
  },
  openGraph: {
    title: "SEO Agency in Hobart",
    description: "TML offers expert SEO services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Hobart" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Hobart",
    description: "TML offers expert SEO services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInHobartPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
