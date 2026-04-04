import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Derby | TML Agency",
  description: "TML offers expert social media marketing services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing derby", "social media marketing agency derby", "social media marketing company derby"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-derby",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Derby | TML Agency",
    description: "TML offers expert social media marketing services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-derby",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Derby | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Derby | TML Agency",
    description: "TML offers expert social media marketing services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
