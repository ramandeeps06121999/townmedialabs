import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Detroit",
  description: "TML offers expert Video Editing services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing detroit", "video editing agency detroit", "video editing company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-detroit",
  },
  openGraph: {
    title: "Video Editing Agency in Detroit",
    description: "TML offers expert Video Editing services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Detroit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Detroit",
    description: "TML offers expert Video Editing services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInDetroitPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
