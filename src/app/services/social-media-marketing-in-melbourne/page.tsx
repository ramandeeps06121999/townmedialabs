import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Melbourne | TML Agency",
  description: "TML offers expert social media marketing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing melbourne", "social media marketing agency melbourne", "social media marketing company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-melbourne",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Melbourne | TML Agency",
    description: "TML offers expert social media marketing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Melbourne | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Melbourne | TML Agency",
    description: "TML offers expert social media marketing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
