import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Manchester | TML Agency",
  description: "TML offers expert social media marketing services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing manchester", "social media marketing agency manchester", "social media marketing company manchester"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-manchester",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Manchester | TML Agency",
    description: "TML offers expert social media marketing services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Manchester | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Manchester | TML Agency",
    description: "TML offers expert social media marketing services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
