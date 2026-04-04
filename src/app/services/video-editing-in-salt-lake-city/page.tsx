import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Salt Lake City | TML Agency",
  description: "TML offers expert video editing services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing salt lake city", "video editing agency salt lake city", "video editing company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-salt-lake-city",
  },
  openGraph: {
    title: "Video Editing Agency in Salt Lake City | TML Agency",
    description: "TML offers expert video editing services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Salt Lake City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Salt Lake City | TML Agency",
    description: "TML offers expert video editing services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
