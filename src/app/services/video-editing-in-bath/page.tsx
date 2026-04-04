import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bath | TML Agency",
  description: "TML offers expert video editing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bath", "video editing agency bath", "video editing company bath"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-bath",
  },
  openGraph: {
    title: "Video Editing Agency in Bath | TML Agency",
    description: "TML offers expert video editing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bath | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bath | TML Agency",
    description: "TML offers expert video editing services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
