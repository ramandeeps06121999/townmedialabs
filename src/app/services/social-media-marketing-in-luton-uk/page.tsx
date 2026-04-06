import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Luton",
  description: "TML offers expert Social Media Marketing services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing luton", "social media marketing agency luton", "social media marketing company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-luton-uk",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Luton",
    description: "TML offers expert Social Media Marketing services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Luton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Luton",
    description: "TML offers expert Social Media Marketing services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInLutonUkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
