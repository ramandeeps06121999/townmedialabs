import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Ajman | TML Agency",
  description: "TML offers expert social media marketing services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing ajman", "social media marketing agency ajman", "social media marketing company ajman"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-ajman",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Ajman | TML Agency",
    description: "TML offers expert social media marketing services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Ajman | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Ajman | TML Agency",
    description: "TML offers expert social media marketing services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
