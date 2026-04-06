import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "SEO Agency in Glasgow",
  description: "TML offers expert SEO services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo glasgow", "seo agency glasgow", "seo company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-glasgow",
  },
  openGraph: {
    title: "SEO Agency in Glasgow",
    description: "TML offers expert SEO services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Glasgow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Glasgow",
    description: "TML offers expert SEO services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInGlasgowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
