import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Kansas City",
  description: "TML offers expert Social Media Marketing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing kansas city", "social media marketing agency kansas city", "social media marketing company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-kansas-city",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Kansas City",
    description: "TML offers expert Social Media Marketing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Kansas City",
    description: "TML offers expert Social Media Marketing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
