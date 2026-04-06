import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "SEO Agency in Ahmedabad",
  description: "TML offers expert Search Engine Optimization services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization ahmedabad", "search engine optimization agency ahmedabad", "search engine optimization company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-ahmedabad",
  },
  openGraph: {
    title: "SEO Agency in Ahmedabad",
    description: "TML offers expert Search Engine Optimization services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Ahmedabad",
    description: "TML offers expert Search Engine Optimization services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
