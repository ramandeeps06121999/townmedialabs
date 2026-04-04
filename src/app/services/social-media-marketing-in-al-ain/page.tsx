import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Al Ain | TML Agency",
  description: "TML offers expert social media marketing services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing al ain", "social media marketing agency al ain", "social media marketing company al ain"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/social-media-marketing-in-al-ain",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Al Ain | TML Agency",
    description: "TML offers expert social media marketing services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/social-media-marketing-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Al Ain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Al Ain | TML Agency",
    description: "TML offers expert social media marketing services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
