import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "SEO Agency in Orlando",
  description: "TML offers expert SEO services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo orlando", "seo agency orlando", "seo company orlando"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-orlando",
  },
  openGraph: {
    title: "SEO Agency in Orlando",
    description: "TML offers expert SEO services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-orlando",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Orlando" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Orlando",
    description: "TML offers expert SEO services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInOrlandoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
