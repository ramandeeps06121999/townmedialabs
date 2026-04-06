import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Jacksonville",
  description: "TML offers expert Social Media Marketing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing jacksonville", "social media marketing agency jacksonville", "social media marketing company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-jacksonville",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Jacksonville",
    description: "TML offers expert Social Media Marketing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Jacksonville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Jacksonville",
    description: "TML offers expert Social Media Marketing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInJacksonvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
