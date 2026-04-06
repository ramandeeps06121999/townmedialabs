import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Cleveland",
  description: "TML offers expert Video Editing services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing cleveland", "video editing agency cleveland", "video editing company cleveland"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-cleveland",
  },
  openGraph: {
    title: "Video Editing Agency in Cleveland",
    description: "TML offers expert Video Editing services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-cleveland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Cleveland" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Cleveland",
    description: "TML offers expert Video Editing services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInClevelandPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
