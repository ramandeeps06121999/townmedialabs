import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Los Angeles | TML Agency",
  description: "TML offers expert social media marketing services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing los angeles", "social media marketing agency los angeles", "social media marketing company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-los-angeles",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Los Angeles | TML Agency",
    description: "TML offers expert social media marketing services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Los Angeles | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Los Angeles | TML Agency",
    description: "TML offers expert social media marketing services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
