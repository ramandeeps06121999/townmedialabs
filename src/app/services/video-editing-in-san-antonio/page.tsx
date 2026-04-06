import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in San Antonio",
  description: "TML offers expert Video Editing services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing san antonio", "video editing agency san antonio", "video editing company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-san-antonio",
  },
  openGraph: {
    title: "Video Editing Agency in San Antonio",
    description: "TML offers expert Video Editing services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in San Antonio" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in San Antonio",
    description: "TML offers expert Video Editing services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInSanAntonioPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
