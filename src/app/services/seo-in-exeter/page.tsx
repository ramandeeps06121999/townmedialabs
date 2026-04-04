import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "SEO Agency in Exeter | TML Agency",
  description: "TML offers expert seo services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo exeter", "seo agency exeter", "seo company exeter"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-exeter",
  },
  openGraph: {
    title: "SEO Agency in Exeter | TML Agency",
    description: "TML offers expert seo services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Exeter | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Exeter | TML Agency",
    description: "TML offers expert seo services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
