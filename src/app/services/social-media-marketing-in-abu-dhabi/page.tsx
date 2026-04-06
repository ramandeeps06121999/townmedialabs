import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Abu Dhabi",
  description: "TML offers expert Social Media Marketing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing abu dhabi", "social media marketing agency abu dhabi", "social media marketing company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-abu-dhabi",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Abu Dhabi",
    description: "TML offers expert Social Media Marketing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Abu Dhabi",
    description: "TML offers expert Social Media Marketing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
