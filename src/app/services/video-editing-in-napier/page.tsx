import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Napier | TML Agency",
  description: "TML offers expert video editing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["video editing napier", "video editing agency napier", "video editing napier nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-napier",
  },
  openGraph: {
    title: "Video Editing Agency in Napier | TML Agency",
    description: "TML offers expert video editing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Napier | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Napier | TML Agency",
    description: "TML offers expert video editing services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
