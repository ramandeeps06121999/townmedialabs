import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Seattle",
  description: "TML offers expert Social Media Marketing services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing seattle", "social media marketing agency seattle", "social media marketing company seattle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-seattle",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Seattle",
    description: "TML offers expert Social Media Marketing services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-seattle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Seattle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Seattle",
    description: "TML offers expert Social Media Marketing services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInSeattlePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
