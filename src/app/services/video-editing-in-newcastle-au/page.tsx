import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Newcastle",
  description: "TML offers expert Video Editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing newcastle", "video editing agency newcastle", "video editing company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-newcastle-au",
  },
  openGraph: {
    title: "Video Editing Agency in Newcastle",
    description: "TML offers expert Video Editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-newcastle-au",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Newcastle",
    description: "TML offers expert Video Editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInNewcastleAuPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
