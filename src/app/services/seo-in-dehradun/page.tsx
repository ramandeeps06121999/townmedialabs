import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "SEO Agency in Dehradun",
  description: "TML offers expert Search Engine Optimization services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization dehradun", "search engine optimization agency dehradun", "search engine optimization company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-dehradun",
  },
  openGraph: {
    title: "SEO Agency in Dehradun",
    description: "TML offers expert Search Engine Optimization services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Dehradun" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Dehradun",
    description: "TML offers expert Search Engine Optimization services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInDehradunPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
