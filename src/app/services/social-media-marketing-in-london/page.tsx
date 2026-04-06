import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in London",
  description: "TML offers expert Social Media Marketing services in London. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing london", "social media marketing agency london", "social media marketing company london"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-london",
  },
  openGraph: {
    title: "Social Media Marketing Agency in London",
    description: "TML offers expert Social Media Marketing services in London. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-london",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in London" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in London",
    description: "TML offers expert Social Media Marketing services in London. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLondonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
