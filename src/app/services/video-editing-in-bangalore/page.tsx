import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bangalore | TML Agency",
  description: "TML offers expert video editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bangalore", "video editing agency bangalore", "video editing company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-bangalore",
  },
  openGraph: {
    title: "Video Editing Agency in Bangalore | TML Agency",
    description: "TML offers expert video editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bangalore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bangalore | TML Agency",
    description: "TML offers expert video editing services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
