import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Peterborough",
  description: "TML offers expert Social Media Marketing services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing peterborough", "social media marketing agency peterborough", "social media marketing company peterborough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-peterborough",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Peterborough",
    description: "TML offers expert Social Media Marketing services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-peterborough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Peterborough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Peterborough",
    description: "TML offers expert Social Media Marketing services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInPeterboroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
