import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Wolverhampton | TML Agency",
  description: "TML offers expert social media marketing services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing wolverhampton", "social media marketing agency wolverhampton", "social media marketing company wolverhampton"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-wolverhampton",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Wolverhampton | TML Agency",
    description: "TML offers expert social media marketing services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-wolverhampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Wolverhampton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Wolverhampton | TML Agency",
    description: "TML offers expert social media marketing services in Wolverhampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
