import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "SEO Agency in Richmond",
  description: "TML offers expert SEO services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo richmond", "seo agency richmond", "seo company richmond"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-richmond",
  },
  openGraph: {
    title: "SEO Agency in Richmond",
    description: "TML offers expert SEO services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-richmond",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Richmond" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Richmond",
    description: "TML offers expert SEO services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInRichmondPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
