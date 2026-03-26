import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Baltimore | TML Agency",
  description: "TML offers expert seo services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo baltimore", "seo agency baltimore", "seo company baltimore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-baltimore",
  },
  openGraph: {
    title: "Best SEO Agency in Baltimore | TML Agency",
    description: "TML offers expert seo services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-baltimore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Baltimore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best SEO Agency in Baltimore | TML Agency",
    description: "TML offers expert seo services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
