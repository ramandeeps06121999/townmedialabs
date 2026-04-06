import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "SEO Agency in Canberra",
  description: "TML offers expert SEO services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo canberra", "seo agency canberra", "seo company canberra"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-canberra",
  },
  openGraph: {
    title: "SEO Agency in Canberra",
    description: "TML offers expert SEO services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Canberra" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Canberra",
    description: "TML offers expert SEO services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInCanberraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
