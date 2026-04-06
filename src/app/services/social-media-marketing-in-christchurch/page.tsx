import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Christchurch",
  description: "TML offers expert Social Media Marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing christchurch", "social media marketing agency christchurch", "social media marketing christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-christchurch",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Christchurch",
    description: "TML offers expert Social Media Marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Christchurch",
    description: "TML offers expert Social Media Marketing services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
