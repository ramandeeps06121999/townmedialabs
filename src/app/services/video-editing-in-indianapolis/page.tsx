import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Indianapolis | TML Agency",
  description: "TML offers expert video editing services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing indianapolis", "video editing agency indianapolis", "video editing company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-indianapolis",
  },
  openGraph: {
    title: "Video Editing Agency in Indianapolis | TML Agency",
    description: "TML offers expert video editing services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Indianapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Indianapolis | TML Agency",
    description: "TML offers expert video editing services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
