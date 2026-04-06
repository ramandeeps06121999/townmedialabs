import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Gold Coast",
  description: "TML offers expert Video Editing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing gold coast", "video editing agency gold coast", "video editing company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-gold-coast",
  },
  openGraph: {
    title: "Video Editing Agency in Gold Coast",
    description: "TML offers expert Video Editing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Gold Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Gold Coast",
    description: "TML offers expert Video Editing services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInGoldCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
