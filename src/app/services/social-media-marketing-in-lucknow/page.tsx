import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Lucknow | TML Agency",
  description: "TML offers expert social media marketing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing lucknow", "social media marketing agency lucknow", "social media marketing company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-lucknow",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Lucknow | TML Agency",
    description: "TML offers expert social media marketing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Lucknow | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Lucknow | TML Agency",
    description: "TML offers expert social media marketing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
