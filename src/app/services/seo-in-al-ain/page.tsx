import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "SEO Agency in Al Ain | TML Agency",
  description: "TML offers expert seo services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo al ain", "seo agency al ain", "seo company al ain"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-al-ain",
  },
  openGraph: {
    title: "SEO Agency in Al Ain | TML Agency",
    description: "TML offers expert seo services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Al Ain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Al Ain | TML Agency",
    description: "TML offers expert seo services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
