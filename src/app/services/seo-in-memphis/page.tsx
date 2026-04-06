import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "SEO Agency in Memphis",
  description: "TML offers expert SEO services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo memphis", "seo agency memphis", "seo company memphis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-memphis",
  },
  openGraph: {
    title: "SEO Agency in Memphis",
    description: "TML offers expert SEO services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-memphis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Memphis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Memphis",
    description: "TML offers expert SEO services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInMemphisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
