import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Southampton | TML Agency",
  description: "TML offers expert video editing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing southampton", "video editing agency southampton", "video editing company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-southampton",
  },
  openGraph: {
    title: "Best Video Editing Agency in Southampton | TML Agency",
    description: "TML offers expert video editing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Southampton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Southampton | TML Agency",
    description: "TML offers expert video editing services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
