import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "SEO Agency in Wollongong",
  description: "TML offers expert SEO services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo wollongong", "seo agency wollongong", "seo company wollongong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-wollongong",
  },
  openGraph: {
    title: "SEO Agency in Wollongong",
    description: "TML offers expert SEO services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-wollongong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Wollongong",
    description: "TML offers expert SEO services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInWollongongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
