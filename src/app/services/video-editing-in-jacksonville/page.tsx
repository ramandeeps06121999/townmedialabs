import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Jacksonville | TML Agency",
  description: "TML offers expert video editing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing jacksonville", "video editing agency jacksonville", "video editing company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-jacksonville",
  },
  openGraph: {
    title: "Video Editing Agency in Jacksonville | TML Agency",
    description: "TML offers expert video editing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Jacksonville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Jacksonville | TML Agency",
    description: "TML offers expert video editing services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
