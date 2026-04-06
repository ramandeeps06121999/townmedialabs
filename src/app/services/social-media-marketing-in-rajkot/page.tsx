import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Rajkot",
  description: "TML offers expert Social Media Marketing services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing rajkot", "social media marketing agency rajkot", "social media marketing company rajkot"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-rajkot",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Rajkot",
    description: "TML offers expert Social Media Marketing services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-rajkot",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Rajkot" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Rajkot",
    description: "TML offers expert Social Media Marketing services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInRajkotPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
