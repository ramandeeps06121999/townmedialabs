import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Stoke-on-Trent",
  description: "TML offers expert Video Editing services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing stoke-on-trent", "video editing agency stoke-on-trent", "video editing company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-stoke-on-trent",
  },
  openGraph: {
    title: "Video Editing Agency in Stoke-on-Trent",
    description: "TML offers expert Video Editing services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Stoke-on-Trent",
    description: "TML offers expert Video Editing services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
