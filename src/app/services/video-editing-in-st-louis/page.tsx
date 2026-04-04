import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in St. Louis | TML Agency",
  description: "TML offers expert video editing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing st. louis", "video editing agency st. louis", "video editing company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-st-louis",
  },
  openGraph: {
    title: "Video Editing Agency in St. Louis | TML Agency",
    description: "TML offers expert video editing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in St. Louis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in St. Louis | TML Agency",
    description: "TML offers expert video editing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
