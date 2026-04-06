import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Philadelphia",
  description: "TML offers expert Social Media Marketing services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing philadelphia", "social media marketing agency philadelphia", "social media marketing company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-philadelphia",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Philadelphia",
    description: "TML offers expert Social Media Marketing services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Philadelphia",
    description: "TML offers expert Social Media Marketing services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
