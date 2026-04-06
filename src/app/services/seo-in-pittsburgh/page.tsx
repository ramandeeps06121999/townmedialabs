import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "SEO Agency in Pittsburgh",
  description: "TML offers expert SEO services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo pittsburgh", "seo agency pittsburgh", "seo company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-pittsburgh",
  },
  openGraph: {
    title: "SEO Agency in Pittsburgh",
    description: "TML offers expert SEO services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Pittsburgh",
    description: "TML offers expert SEO services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
