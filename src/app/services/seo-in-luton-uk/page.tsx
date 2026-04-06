import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "SEO Agency in Luton",
  description: "TML offers expert SEO services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo luton", "seo agency luton", "seo company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-luton-uk",
  },
  openGraph: {
    title: "SEO Agency in Luton",
    description: "TML offers expert SEO services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Luton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Luton",
    description: "TML offers expert SEO services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInLutonUkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
