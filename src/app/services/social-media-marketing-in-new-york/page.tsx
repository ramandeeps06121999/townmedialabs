import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in New York",
  description: "TML offers expert Social Media Marketing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing new york", "social media marketing agency new york", "social media marketing company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-new-york",
  },
  openGraph: {
    title: "Social Media Marketing Agency in New York",
    description: "TML offers expert Social Media Marketing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in New York",
    description: "TML offers expert Social Media Marketing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
