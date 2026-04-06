import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "SEO Agency in Coventry",
  description: "TML offers expert SEO services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo coventry", "seo agency coventry", "seo company coventry"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-coventry",
  },
  openGraph: {
    title: "SEO Agency in Coventry",
    description: "TML offers expert SEO services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-coventry",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Coventry" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Coventry",
    description: "TML offers expert SEO services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCoventryPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
