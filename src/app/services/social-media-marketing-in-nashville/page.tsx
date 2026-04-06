import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Nashville",
  description: "TML offers expert Social Media Marketing services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing nashville", "social media marketing agency nashville", "social media marketing company nashville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-nashville",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Nashville",
    description: "TML offers expert Social Media Marketing services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-nashville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Nashville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Nashville",
    description: "TML offers expert Social Media Marketing services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInNashvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
