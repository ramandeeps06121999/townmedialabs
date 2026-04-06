import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Virginia Beach",
  description: "TML offers expert Video Editing services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing virginia beach", "video editing agency virginia beach", "video editing company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-virginia-beach",
  },
  openGraph: {
    title: "Video Editing Agency in Virginia Beach",
    description: "TML offers expert Video Editing services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Virginia Beach",
    description: "TML offers expert Video Editing services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
