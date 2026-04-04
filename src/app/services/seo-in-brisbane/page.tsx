import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "SEO Agency in Brisbane | TML Agency",
  description: "TML offers expert seo services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo brisbane", "seo agency brisbane", "seo company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-brisbane",
  },
  openGraph: {
    title: "SEO Agency in Brisbane | TML Agency",
    description: "TML offers expert seo services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Brisbane | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Brisbane | TML Agency",
    description: "TML offers expert seo services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
