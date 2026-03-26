import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Bath | TML Agency",
  description: "TML offers expert social media marketing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing bath", "social media marketing agency bath", "social media marketing company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-bath",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Bath | TML Agency",
    description: "TML offers expert social media marketing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Bath | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Bath | TML Agency",
    description: "TML offers expert social media marketing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
