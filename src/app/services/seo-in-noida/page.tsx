import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "SEO Agency in Noida",
  description: "TML offers expert Search Engine Optimization services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization noida", "search engine optimization agency noida", "search engine optimization company noida"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-noida",
  },
  openGraph: {
    title: "SEO Agency in Noida",
    description: "TML offers expert Search Engine Optimization services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Noida" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Noida",
    description: "TML offers expert Search Engine Optimization services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInNoidaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
