import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Atlanta | TML Agency",
  description: "TML offers expert social media marketing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing atlanta", "social media marketing agency atlanta", "social media marketing company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-atlanta",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Atlanta | TML Agency",
    description: "TML offers expert social media marketing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Atlanta | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Atlanta | TML Agency",
    description: "TML offers expert social media marketing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
