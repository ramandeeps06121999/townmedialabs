import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Louisville",
  description: "TML offers expert Social Media Marketing services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing louisville", "social media marketing agency louisville", "social media marketing company louisville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-louisville",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Louisville",
    description: "TML offers expert Social Media Marketing services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-louisville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Louisville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Louisville",
    description: "TML offers expert Social Media Marketing services in Louisville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLouisvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
