import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "SEO Agency in Oxford",
  description: "TML offers expert SEO services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo oxford", "seo agency oxford", "seo company oxford"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-oxford",
  },
  openGraph: {
    title: "SEO Agency in Oxford",
    description: "TML offers expert SEO services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-oxford",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Oxford" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Oxford",
    description: "TML offers expert SEO services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInOxfordPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
