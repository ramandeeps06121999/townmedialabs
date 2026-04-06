import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "SEO Agency in Cleveland",
  description: "TML offers expert SEO services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cleveland", "seo agency cleveland", "seo company cleveland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-cleveland",
  },
  openGraph: {
    title: "SEO Agency in Cleveland",
    description: "TML offers expert SEO services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-cleveland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cleveland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Cleveland",
    description: "TML offers expert SEO services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInClevelandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
