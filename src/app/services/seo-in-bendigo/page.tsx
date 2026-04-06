import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "SEO Agency in Bendigo",
  description: "TML offers expert SEO services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bendigo", "seo agency bendigo", "seo company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-bendigo",
  },
  openGraph: {
    title: "SEO Agency in Bendigo",
    description: "TML offers expert SEO services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Bendigo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Bendigo",
    description: "TML offers expert SEO services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBendigoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
