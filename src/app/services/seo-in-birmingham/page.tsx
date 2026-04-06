import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["birmingham"];

export const metadata: Metadata = {
  title: "SEO Agency in Birmingham",
  description: "TML offers expert SEO services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo birmingham", "seo agency birmingham", "seo company birmingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-birmingham",
  },
  openGraph: {
    title: "SEO Agency in Birmingham",
    description: "TML offers expert SEO services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-birmingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Birmingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Birmingham",
    description: "TML offers expert SEO services in Birmingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInBirminghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
