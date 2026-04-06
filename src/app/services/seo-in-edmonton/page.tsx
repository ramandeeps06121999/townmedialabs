import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "SEO Agency in Edmonton",
  description: "TML offers expert SEO services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo edmonton", "seo agency edmonton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-edmonton",
  },
  openGraph: {
    title: "SEO Agency in Edmonton",
    description: "TML offers expert SEO services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-edmonton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Edmonton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Edmonton",
    description: "TML offers expert SEO services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
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
