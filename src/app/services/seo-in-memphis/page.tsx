import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "SEO Agency in Memphis | TML Agency",
  description: "TML offers expert seo services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo memphis", "seo agency memphis", "seo company memphis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-memphis",
  },
  openGraph: {
    title: "SEO Agency in Memphis | TML Agency",
    description: "TML offers expert seo services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-memphis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Memphis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Memphis | TML Agency",
    description: "TML offers expert seo services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
