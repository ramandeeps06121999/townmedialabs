import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Cheltenham",
  description: "TML offers expert Social Media Marketing services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing cheltenham", "social media marketing agency cheltenham", "social media marketing company cheltenham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-cheltenham",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Cheltenham",
    description: "TML offers expert Social Media Marketing services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-cheltenham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Cheltenham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Cheltenham",
    description: "TML offers expert Social Media Marketing services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInCheltenhamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
