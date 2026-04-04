import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Delhi | TML Agency",
  description: "TML offers expert video editing services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing delhi", "video editing agency delhi", "video editing company delhi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-delhi",
  },
  openGraph: {
    title: "Video Editing Agency in Delhi | TML Agency",
    description: "TML offers expert video editing services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Delhi | TML Agency",
    description: "TML offers expert video editing services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
