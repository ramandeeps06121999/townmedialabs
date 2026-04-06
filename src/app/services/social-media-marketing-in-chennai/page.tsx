import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Chennai",
  description: "TML offers expert Social Media Marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing chennai", "social media marketing agency chennai", "social media marketing company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-chennai",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Chennai",
    description: "TML offers expert Social Media Marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Chennai",
    description: "TML offers expert Social Media Marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInChennaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
