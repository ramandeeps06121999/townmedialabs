import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Mohali | TML Agency",
  description: "TML offers expert video editing services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing mohali", "video editing agency mohali", "video editing company mohali"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-mohali",
  },
  openGraph: {
    title: "Video Editing Agency in Mohali | TML Agency",
    description: "TML offers expert video editing services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Mohali | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Mohali | TML Agency",
    description: "TML offers expert video editing services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
