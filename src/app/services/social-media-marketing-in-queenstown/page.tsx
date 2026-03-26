import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Queenstown | TML Agency",
  description: "TML offers expert social media marketing services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing queenstown", "social media marketing agency queenstown", "social media marketing queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-queenstown",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Queenstown | TML Agency",
    description: "TML offers expert social media marketing services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Queenstown | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Queenstown | TML Agency",
    description: "TML offers expert social media marketing services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
