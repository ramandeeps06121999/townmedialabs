import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Adelaide",
  description: "TML offers expert Video Editing services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing adelaide", "video editing agency adelaide", "video editing company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-adelaide",
  },
  openGraph: {
    title: "Video Editing Agency in Adelaide",
    description: "TML offers expert Video Editing services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Adelaide",
    description: "TML offers expert Video Editing services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
