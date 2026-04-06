import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in San Jose",
  description: "TML offers expert Social Media Marketing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing san jose", "social media marketing agency san jose", "social media marketing company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-san-jose",
  },
  openGraph: {
    title: "Social Media Marketing Agency in San Jose",
    description: "TML offers expert Social Media Marketing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in San Jose" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in San Jose",
    description: "TML offers expert Social Media Marketing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInSanJosePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
