import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in New York",
  description: "TML offers expert Video Editing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing new york", "video editing agency new york", "video editing company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-new-york",
  },
  openGraph: {
    title: "Video Editing Agency in New York",
    description: "TML offers expert Video Editing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in New York",
    description: "TML offers expert Video Editing services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
