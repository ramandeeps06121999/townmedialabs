import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Oklahoma City",
  description: "TML offers expert Video Editing services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing oklahoma city", "video editing agency oklahoma city", "video editing company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-oklahoma-city",
  },
  openGraph: {
    title: "Video Editing Agency in Oklahoma City",
    description: "TML offers expert Video Editing services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Oklahoma City",
    description: "TML offers expert Video Editing services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
