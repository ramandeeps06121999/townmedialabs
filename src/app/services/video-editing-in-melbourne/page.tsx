import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Melbourne",
  description: "TML offers expert Video Editing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing melbourne", "video editing agency melbourne", "video editing company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-melbourne",
  },
  openGraph: {
    title: "Video Editing Agency in Melbourne",
    description: "TML offers expert Video Editing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Melbourne",
    description: "TML offers expert Video Editing services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInMelbournePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
