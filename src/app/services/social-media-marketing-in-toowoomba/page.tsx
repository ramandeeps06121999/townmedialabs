import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Toowoomba | TML Agency",
  description: "TML offers expert social media marketing services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing toowoomba", "social media marketing agency toowoomba", "social media marketing company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-toowoomba",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Toowoomba | TML Agency",
    description: "TML offers expert social media marketing services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Toowoomba | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Toowoomba | TML Agency",
    description: "TML offers expert social media marketing services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInToowoombaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
