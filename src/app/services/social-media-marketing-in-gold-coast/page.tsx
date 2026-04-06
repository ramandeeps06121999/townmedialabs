import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Gold Coast",
  description: "TML offers expert Social Media Marketing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing gold coast", "social media marketing agency gold coast", "social media marketing company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-gold-coast",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Gold Coast",
    description: "TML offers expert Social Media Marketing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Gold Coast",
    description: "TML offers expert Social Media Marketing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
