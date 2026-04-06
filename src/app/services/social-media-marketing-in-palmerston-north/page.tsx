import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Palmerston North",
  description: "TML offers expert Social Media Marketing services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing palmerston north", "social media marketing agency palmerston north", "social media marketing palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-palmerston-north",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Palmerston North",
    description: "TML offers expert Social Media Marketing services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Palmerston North",
    description: "TML offers expert Social Media Marketing services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
