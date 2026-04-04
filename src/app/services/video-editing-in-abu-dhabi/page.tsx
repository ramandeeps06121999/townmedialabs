import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert video editing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing abu dhabi", "video editing agency abu dhabi", "video editing company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-abu-dhabi",
  },
  openGraph: {
    title: "Video Editing Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert video editing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert video editing services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
