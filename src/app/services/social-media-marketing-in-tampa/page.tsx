import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Tampa",
  description: "TML offers expert Social Media Marketing services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing tampa", "social media marketing agency tampa", "social media marketing company tampa"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-tampa",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Tampa",
    description: "TML offers expert Social Media Marketing services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-tampa",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Tampa" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Tampa",
    description: "TML offers expert Social Media Marketing services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInTampaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
