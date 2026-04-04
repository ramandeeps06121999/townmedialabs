import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Gold Coast | TML Agency",
  description: "TML offers expert video editing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing gold coast", "video editing agency gold coast", "video editing company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-gold-coast",
  },
  openGraph: {
    title: "Video Editing Agency in Gold Coast | TML Agency",
    description: "TML offers expert video editing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Gold Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Gold Coast | TML Agency",
    description: "TML offers expert video editing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
