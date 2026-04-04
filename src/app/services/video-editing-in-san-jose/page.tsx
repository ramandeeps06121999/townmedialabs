import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in San Jose | TML Agency",
  description: "TML offers expert video editing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing san jose", "video editing agency san jose", "video editing company san jose"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-san-jose",
  },
  openGraph: {
    title: "Video Editing Agency in San Jose | TML Agency",
    description: "TML offers expert video editing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in San Jose | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in San Jose | TML Agency",
    description: "TML offers expert video editing services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
