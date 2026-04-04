import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "SEO Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert seo services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ras al khaimah", "seo agency ras al khaimah", "seo company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-ras-al-khaimah",
  },
  openGraph: {
    title: "SEO Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert seo services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ras Al Khaimah | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert seo services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
