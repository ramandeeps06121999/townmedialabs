import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Sharjah",
  description: "TML offers expert Social Media Marketing services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing sharjah", "social media marketing agency sharjah", "social media marketing company sharjah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-sharjah",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Sharjah",
    description: "TML offers expert Social Media Marketing services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-sharjah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Sharjah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Sharjah",
    description: "TML offers expert Social Media Marketing services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInSharjahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
