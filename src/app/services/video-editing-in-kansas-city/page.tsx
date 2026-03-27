import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Video Editing Agency in Kansas City | TML Agency",
  description: "TML offers expert video editing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing kansas city", "video editing agency kansas city", "video editing company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-kansas-city",
  },
  openGraph: {
    title: "Best Video Editing Agency in Kansas City | TML Agency",
    description: "TML offers expert video editing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Kansas City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Kansas City | TML Agency",
    description: "TML offers expert video editing services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
