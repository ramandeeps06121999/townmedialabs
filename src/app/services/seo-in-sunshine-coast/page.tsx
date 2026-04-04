import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "SEO Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert seo services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sunshine coast", "seo agency sunshine coast", "seo company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-sunshine-coast",
  },
  openGraph: {
    title: "SEO Agency in Sunshine Coast | TML Agency",
    description: "TML offers expert seo services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Sunshine Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Sunshine Coast | TML Agency",
    description: "TML offers expert seo services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
