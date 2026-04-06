import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Ras Al Khaimah",
  description: "TML offers expert Video Editing services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ras al khaimah", "video editing agency ras al khaimah", "video editing company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Video Editing Agency in Ras Al Khaimah",
    description: "TML offers expert Video Editing services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Ras Al Khaimah",
    description: "TML offers expert Video Editing services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
