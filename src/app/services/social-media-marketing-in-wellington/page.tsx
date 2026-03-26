import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Wellington | TML Agency",
  description: "TML offers expert social media marketing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing wellington", "social media marketing agency wellington", "social media marketing wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-wellington",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Wellington | TML Agency",
    description: "TML offers expert social media marketing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Wellington | TML Agency",
    description: "TML offers expert social media marketing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
