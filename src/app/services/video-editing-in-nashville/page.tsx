import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Nashville",
  description: "TML offers expert Video Editing services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing nashville", "video editing agency nashville", "video editing company nashville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-nashville",
  },
  openGraph: {
    title: "Video Editing Agency in Nashville",
    description: "TML offers expert Video Editing services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-nashville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Nashville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Nashville",
    description: "TML offers expert Video Editing services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInNashvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
