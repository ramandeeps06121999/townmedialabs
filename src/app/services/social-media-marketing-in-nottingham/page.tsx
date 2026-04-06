import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Nottingham",
  description: "TML offers expert Social Media Marketing services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing nottingham", "social media marketing agency nottingham", "social media marketing company nottingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-nottingham",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Nottingham",
    description: "TML offers expert Social Media Marketing services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-nottingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Nottingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Nottingham",
    description: "TML offers expert Social Media Marketing services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInNottinghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
