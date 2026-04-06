import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "SEO Agency in Karnal",
  description: "TML offers expert Search Engine Optimization services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization karnal", "search engine optimization agency karnal", "search engine optimization company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-karnal",
  },
  openGraph: {
    title: "SEO Agency in Karnal",
    description: "TML offers expert Search Engine Optimization services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Karnal",
    description: "TML offers expert Search Engine Optimization services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
