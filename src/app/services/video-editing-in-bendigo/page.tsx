import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bendigo",
  description: "TML offers expert Video Editing services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bendigo", "video editing agency bendigo", "video editing company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-bendigo",
  },
  openGraph: {
    title: "Video Editing Agency in Bendigo",
    description: "TML offers expert Video Editing services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bendigo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bendigo",
    description: "TML offers expert Video Editing services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInBendigoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
