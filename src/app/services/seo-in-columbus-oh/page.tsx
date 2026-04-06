import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "SEO Agency in Columbus",
  description: "TML offers expert SEO services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo columbus", "seo agency columbus", "seo company columbus"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-columbus-oh",
  },
  openGraph: {
    title: "SEO Agency in Columbus",
    description: "TML offers expert SEO services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Columbus" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Columbus",
    description: "TML offers expert SEO services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInColumbusOhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
