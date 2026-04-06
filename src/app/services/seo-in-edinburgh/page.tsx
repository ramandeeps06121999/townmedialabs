import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "SEO Agency in Edinburgh",
  description: "TML offers expert SEO services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo edinburgh", "seo agency edinburgh", "seo company edinburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-edinburgh",
  },
  openGraph: {
    title: "SEO Agency in Edinburgh",
    description: "TML offers expert SEO services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-edinburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Edinburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Edinburgh",
    description: "TML offers expert SEO services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInEdinburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
