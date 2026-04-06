import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "SEO Agency in Aberdeen",
  description: "TML offers expert SEO services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo aberdeen", "seo agency aberdeen", "seo company aberdeen"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-aberdeen",
  },
  openGraph: {
    title: "SEO Agency in Aberdeen",
    description: "TML offers expert SEO services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-aberdeen",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Aberdeen" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Aberdeen",
    description: "TML offers expert SEO services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAberdeenPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
