import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Hamilton | TML Agency",
  description: "TML offers expert social media marketing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing hamilton", "social media marketing agency hamilton", "social media marketing hamilton nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-hamilton",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Hamilton | TML Agency",
    description: "TML offers expert social media marketing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Hamilton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Hamilton | TML Agency",
    description: "TML offers expert social media marketing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
