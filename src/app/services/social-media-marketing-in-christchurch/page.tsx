import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Christchurch | TML Agency",
  description: "TML offers expert social media marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing christchurch", "social media marketing agency christchurch", "social media marketing christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-christchurch",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Christchurch | TML Agency",
    description: "TML offers expert social media marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Christchurch | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Christchurch | TML Agency",
    description: "TML offers expert social media marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
