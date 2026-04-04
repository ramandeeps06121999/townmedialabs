import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Honolulu | TML Agency",
  description: "TML offers expert video editing services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing honolulu", "video editing agency honolulu", "video editing company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-honolulu",
  },
  openGraph: {
    title: "Video Editing Agency in Honolulu | TML Agency",
    description: "TML offers expert video editing services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Honolulu | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Honolulu | TML Agency",
    description: "TML offers expert video editing services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
