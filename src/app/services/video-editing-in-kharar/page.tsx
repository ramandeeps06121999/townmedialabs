import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Kharar",
  description: "TML offers expert Video Editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing kharar", "video editing agency kharar", "video editing company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-kharar",
  },
  openGraph: {
    title: "Video Editing Agency in Kharar",
    description: "TML offers expert Video Editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Kharar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Kharar",
    description: "TML offers expert Video Editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInKhararPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
