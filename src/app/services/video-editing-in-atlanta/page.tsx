import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Atlanta",
  description: "TML offers expert Video Editing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing atlanta", "video editing agency atlanta", "video editing company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-atlanta",
  },
  openGraph: {
    title: "Video Editing Agency in Atlanta",
    description: "TML offers expert Video Editing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Atlanta",
    description: "TML offers expert Video Editing services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInAtlantaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
