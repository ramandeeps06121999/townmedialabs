import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Chennai",
  description: "TML offers expert Video Editing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing chennai", "video editing agency chennai", "video editing company chennai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-chennai",
  },
  openGraph: {
    title: "Video Editing Agency in Chennai",
    description: "TML offers expert Video Editing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-chennai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Chennai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Chennai",
    description: "TML offers expert Video Editing services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInChennaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
