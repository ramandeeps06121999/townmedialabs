import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Tauranga",
  description: "TML offers expert Social Media Marketing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing tauranga", "social media marketing agency tauranga", "social media marketing tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-tauranga",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Tauranga",
    description: "TML offers expert Social Media Marketing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Tauranga" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Tauranga",
    description: "TML offers expert Social Media Marketing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInTaurangaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
