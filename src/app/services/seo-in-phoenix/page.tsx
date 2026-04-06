import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "SEO Agency in Phoenix",
  description: "TML offers expert SEO services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo phoenix", "seo agency phoenix", "seo company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-phoenix",
  },
  openGraph: {
    title: "SEO Agency in Phoenix",
    description: "TML offers expert SEO services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Phoenix" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Phoenix",
    description: "TML offers expert SEO services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInPhoenixPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
