import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Boise",
  description: "TML offers expert Social Media Marketing services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing boise", "social media marketing agency boise", "social media marketing company boise"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-boise",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Boise",
    description: "TML offers expert Social Media Marketing services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-boise",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Boise" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Boise",
    description: "TML offers expert Social Media Marketing services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInBoisePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
