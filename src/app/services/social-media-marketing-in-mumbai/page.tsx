import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Mumbai",
  description: "TML offers expert Social Media Marketing services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing mumbai", "social media marketing agency mumbai", "social media marketing company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-mumbai",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Mumbai",
    description: "TML offers expert Social Media Marketing services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Mumbai",
    description: "TML offers expert Social Media Marketing services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
