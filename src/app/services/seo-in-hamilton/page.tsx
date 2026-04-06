import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "SEO Agency in Hamilton",
  description: "TML offers expert SEO services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["seo hamilton", "seo agency hamilton", "seo hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-hamilton",
  },
  openGraph: {
    title: "SEO Agency in Hamilton",
    description: "TML offers expert SEO services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Hamilton",
    description: "TML offers expert SEO services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
