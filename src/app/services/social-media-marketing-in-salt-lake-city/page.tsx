import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Salt Lake City",
  description: "TML offers expert Social Media Marketing services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing salt lake city", "social media marketing agency salt lake city", "social media marketing company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-salt-lake-city",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Salt Lake City",
    description: "TML offers expert Social Media Marketing services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Salt Lake City",
    description: "TML offers expert Social Media Marketing services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
