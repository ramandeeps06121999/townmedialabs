import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in New York | TML Agency",
  description: "TML offers expert video editing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing new york", "video editing agency new york", "video editing company new york"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-new-york",
  },
  openGraph: {
    title: "Video Editing Agency in New York | TML Agency",
    description: "TML offers expert video editing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in New York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in New York | TML Agency",
    description: "TML offers expert video editing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
