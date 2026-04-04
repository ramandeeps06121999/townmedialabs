import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Geelong | TML Agency",
  description: "TML offers expert social media marketing services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing geelong", "social media marketing agency geelong", "social media marketing company geelong"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-geelong",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Geelong | TML Agency",
    description: "TML offers expert social media marketing services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Geelong | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Geelong | TML Agency",
    description: "TML offers expert social media marketing services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
