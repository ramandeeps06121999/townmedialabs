import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Houston",
  description: "TML offers expert Social Media Marketing services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing houston", "social media marketing agency houston", "social media marketing company houston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-houston",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Houston",
    description: "TML offers expert Social Media Marketing services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-houston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Houston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Houston",
    description: "TML offers expert Social Media Marketing services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInHoustonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
