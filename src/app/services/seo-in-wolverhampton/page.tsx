import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "SEO Agency in Wolverhampton",
  description: "TML offers expert SEO services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo wolverhampton", "seo agency wolverhampton", "seo company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-wolverhampton",
  },
  openGraph: {
    title: "SEO Agency in Wolverhampton",
    description: "TML offers expert SEO services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Wolverhampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Wolverhampton",
    description: "TML offers expert SEO services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInWolverhamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
