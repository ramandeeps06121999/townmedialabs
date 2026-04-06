import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "SEO Agency in Ajman",
  description: "TML offers expert SEO services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ajman", "seo agency ajman", "seo company ajman"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ajman",
  },
  openGraph: {
    title: "SEO Agency in Ajman",
    description: "TML offers expert SEO services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ajman" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ajman",
    description: "TML offers expert SEO services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAjmanPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
