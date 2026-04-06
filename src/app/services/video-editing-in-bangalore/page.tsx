import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bangalore",
  description: "TML offers expert Video Editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bangalore", "video editing agency bangalore", "video editing company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-bangalore",
  },
  openGraph: {
    title: "Video Editing Agency in Bangalore",
    description: "TML offers expert Video Editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bangalore",
    description: "TML offers expert Video Editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInBangalorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
