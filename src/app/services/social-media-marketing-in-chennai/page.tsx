import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Chennai | TML Agency",
  description: "TML offers expert social media marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing chennai", "social media marketing agency chennai", "social media marketing company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-chennai",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Chennai | TML Agency",
    description: "TML offers expert social media marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Chennai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Chennai | TML Agency",
    description: "TML offers expert social media marketing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
