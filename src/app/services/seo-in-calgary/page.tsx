import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "SEO Agency in Calgary",
  description: "TML offers expert SEO services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo calgary", "seo agency calgary"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-calgary",
  },
  openGraph: {
    title: "SEO Agency in Calgary",
    description: "TML offers expert SEO services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-calgary",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Calgary",
    description: "TML offers expert SEO services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
