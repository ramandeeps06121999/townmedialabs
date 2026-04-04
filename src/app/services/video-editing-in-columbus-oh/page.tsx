import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Columbus | TML Agency",
  description: "TML offers expert video editing services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing columbus", "video editing agency columbus", "video editing company columbus"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-columbus-oh",
  },
  openGraph: {
    title: "Video Editing Agency in Columbus | TML Agency",
    description: "TML offers expert video editing services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Columbus | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Columbus | TML Agency",
    description: "TML offers expert video editing services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
