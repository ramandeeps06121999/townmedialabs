import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Calgary | TML Agency",
  description: "TML offers expert social media marketing services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing calgary", "social media marketing agency calgary"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-calgary",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Calgary | TML Agency",
    description: "TML offers expert social media marketing services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-calgary",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Calgary | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Calgary | TML Agency",
    description: "TML offers expert social media marketing services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
