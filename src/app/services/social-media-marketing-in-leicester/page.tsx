import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Leicester",
  description: "TML offers expert Social Media Marketing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing leicester", "social media marketing agency leicester", "social media marketing company leicester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-leicester",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Leicester",
    description: "TML offers expert Social Media Marketing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-leicester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Leicester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Leicester",
    description: "TML offers expert Social Media Marketing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLeicesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
