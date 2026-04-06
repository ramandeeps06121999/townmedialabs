import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "SEO Agency in Cheltenham",
  description: "TML offers expert SEO services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cheltenham", "seo agency cheltenham", "seo company cheltenham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-cheltenham",
  },
  openGraph: {
    title: "SEO Agency in Cheltenham",
    description: "TML offers expert SEO services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-cheltenham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Cheltenham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Cheltenham",
    description: "TML offers expert SEO services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCheltenhamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
