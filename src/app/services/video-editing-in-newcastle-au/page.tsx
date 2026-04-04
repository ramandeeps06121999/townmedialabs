import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Newcastle | TML Agency",
  description: "TML offers expert video editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing newcastle", "video editing agency newcastle", "video editing company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-newcastle-au",
  },
  openGraph: {
    title: "Video Editing Agency in Newcastle | TML Agency",
    description: "TML offers expert video editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-newcastle-au",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Newcastle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Newcastle | TML Agency",
    description: "TML offers expert video editing services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInNewcastleAuPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
