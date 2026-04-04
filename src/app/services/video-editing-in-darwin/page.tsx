import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Darwin | TML Agency",
  description: "TML offers expert video editing services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing darwin", "video editing agency darwin", "video editing company darwin"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-darwin",
  },
  openGraph: {
    title: "Video Editing Agency in Darwin | TML Agency",
    description: "TML offers expert video editing services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-darwin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Darwin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Darwin | TML Agency",
    description: "TML offers expert video editing services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
