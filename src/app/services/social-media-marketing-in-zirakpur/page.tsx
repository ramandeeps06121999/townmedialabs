import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Zirakpur | TML Agency",
  description: "TML offers expert social media marketing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing zirakpur", "social media marketing agency zirakpur", "social media marketing company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-zirakpur",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Zirakpur | TML Agency",
    description: "TML offers expert social media marketing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Zirakpur | TML Agency",
    description: "TML offers expert social media marketing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
