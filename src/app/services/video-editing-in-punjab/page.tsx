import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Punjab",
  description: "TML offers expert Video Editing services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing punjab", "video editing agency punjab", "video editing company punjab"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-punjab",
  },
  openGraph: {
    title: "Video Editing Agency in Punjab",
    description: "TML offers expert Video Editing services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-punjab",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Punjab" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Punjab",
    description: "TML offers expert Video Editing services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInPunjabPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
