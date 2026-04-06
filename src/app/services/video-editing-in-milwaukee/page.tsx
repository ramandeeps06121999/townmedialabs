import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Milwaukee",
  description: "TML offers expert Video Editing services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing milwaukee", "video editing agency milwaukee", "video editing company milwaukee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-milwaukee",
  },
  openGraph: {
    title: "Video Editing Agency in Milwaukee",
    description: "TML offers expert Video Editing services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-milwaukee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Milwaukee" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Milwaukee",
    description: "TML offers expert Video Editing services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInMilwaukeePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
