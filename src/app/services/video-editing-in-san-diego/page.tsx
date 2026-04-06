import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in San Diego",
  description: "TML offers expert Video Editing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing san diego", "video editing agency san diego", "video editing company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-san-diego",
  },
  openGraph: {
    title: "Video Editing Agency in San Diego",
    description: "TML offers expert Video Editing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in San Diego",
    description: "TML offers expert Video Editing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
