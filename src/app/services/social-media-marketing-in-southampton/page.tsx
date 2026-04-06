import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Southampton",
  description: "TML offers expert Social Media Marketing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing southampton", "social media marketing agency southampton", "social media marketing company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-southampton",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Southampton",
    description: "TML offers expert Social Media Marketing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Southampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Southampton",
    description: "TML offers expert Social Media Marketing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInSouthamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
