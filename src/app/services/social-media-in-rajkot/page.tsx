import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Rajkot | TML Agency",
  description: "TML offers expert social media marketing services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing rajkot", "social media marketing agency rajkot", "social media marketing company rajkot"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-in-rajkot",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Rajkot | TML Agency",
    description: "TML offers expert social media marketing services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-in-rajkot",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Rajkot | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Rajkot | TML Agency",
    description: "TML offers expert social media marketing services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
