import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Brighton",
  description: "TML offers expert Social Media Marketing services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing brighton", "social media marketing agency brighton", "social media marketing company brighton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-brighton",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Brighton",
    description: "TML offers expert Social Media Marketing services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-brighton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Brighton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Brighton",
    description: "TML offers expert Social Media Marketing services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInBrightonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
