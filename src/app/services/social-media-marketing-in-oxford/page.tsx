import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Oxford",
  description: "TML offers expert Social Media Marketing services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing oxford", "social media marketing agency oxford", "social media marketing company oxford"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-oxford",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Oxford",
    description: "TML offers expert Social Media Marketing services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-oxford",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Oxford" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Oxford",
    description: "TML offers expert Social Media Marketing services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInOxfordPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
