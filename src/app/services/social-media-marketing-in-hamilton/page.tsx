import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Hamilton",
  description: "TML offers expert Social Media Marketing services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["social media marketing hamilton", "social media marketing agency hamilton", "social media marketing hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-hamilton",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Hamilton",
    description: "TML offers expert Social Media Marketing services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Hamilton",
    description: "TML offers expert Social Media Marketing services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
