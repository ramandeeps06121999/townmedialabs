import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Napier | TML Agency",
  description: "TML offers expert social media marketing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing napier", "social media marketing agency napier", "social media marketing napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-napier",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Napier | TML Agency",
    description: "TML offers expert social media marketing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Napier | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Napier | TML Agency",
    description: "TML offers expert social media marketing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
