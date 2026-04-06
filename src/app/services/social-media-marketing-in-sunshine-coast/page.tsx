import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Sunshine Coast",
  description: "TML offers expert Social Media Marketing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sunshine coast", "social media marketing agency sunshine coast", "social media marketing company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-sunshine-coast",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Sunshine Coast",
    description: "TML offers expert Social Media Marketing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Sunshine Coast",
    description: "TML offers expert Social Media Marketing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
