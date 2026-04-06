import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Cincinnati",
  description: "TML offers expert Social Media Marketing services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cincinnati", "social media marketing agency cincinnati", "social media marketing company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-cincinnati",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Cincinnati",
    description: "TML offers expert Social Media Marketing services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Cincinnati" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Cincinnati",
    description: "TML offers expert Social Media Marketing services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInCincinnatiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
