import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Karnal | TML Agency",
  description: "TML offers expert social media marketing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing karnal", "social media marketing agency karnal", "social media marketing company karnal"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-karnal",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Karnal | TML Agency",
    description: "TML offers expert social media marketing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Karnal | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Karnal | TML Agency",
    description: "TML offers expert social media marketing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
