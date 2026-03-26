import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Belfast | TML Agency",
  description: "TML offers expert social media marketing services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing belfast", "social media marketing agency belfast", "social media marketing company belfast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-belfast",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Belfast | TML Agency",
    description: "TML offers expert social media marketing services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-belfast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Belfast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Belfast | TML Agency",
    description: "TML offers expert social media marketing services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
