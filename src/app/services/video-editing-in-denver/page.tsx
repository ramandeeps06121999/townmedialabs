import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Denver",
  description: "TML offers expert Video Editing services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing denver", "video editing agency denver", "video editing company denver"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-denver",
  },
  openGraph: {
    title: "Video Editing Agency in Denver",
    description: "TML offers expert Video Editing services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-denver",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Denver" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Denver",
    description: "TML offers expert Video Editing services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInDenverPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
