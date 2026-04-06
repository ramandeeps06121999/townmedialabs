import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in St. Louis",
  description: "TML offers expert Social Media Marketing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing st. louis", "social media marketing agency st. louis", "social media marketing company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-st-louis",
  },
  openGraph: {
    title: "Social Media Marketing Agency in St. Louis",
    description: "TML offers expert Social Media Marketing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in St. Louis",
    description: "TML offers expert Social Media Marketing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
