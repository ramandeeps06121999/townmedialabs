import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Jalandhar | TML Agency",
  description: "TML offers expert social media marketing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing jalandhar", "social media marketing agency jalandhar", "social media marketing company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-jalandhar",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Jalandhar | TML Agency",
    description: "TML offers expert social media marketing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Jalandhar | TML Agency",
    description: "TML offers expert social media marketing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
