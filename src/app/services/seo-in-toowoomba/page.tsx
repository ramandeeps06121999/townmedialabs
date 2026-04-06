import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "SEO Agency in Toowoomba",
  description: "TML offers expert SEO services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo toowoomba", "seo agency toowoomba", "seo company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-toowoomba",
  },
  openGraph: {
    title: "SEO Agency in Toowoomba",
    description: "TML offers expert SEO services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Toowoomba" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Toowoomba",
    description: "TML offers expert SEO services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInToowoombaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
