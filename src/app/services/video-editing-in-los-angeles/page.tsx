import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Los Angeles",
  description: "TML offers expert Video Editing services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing los angeles", "video editing agency los angeles", "video editing company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-los-angeles",
  },
  openGraph: {
    title: "Video Editing Agency in Los Angeles",
    description: "TML offers expert Video Editing services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Los Angeles" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Los Angeles",
    description: "TML offers expert Video Editing services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInLosAngelesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
