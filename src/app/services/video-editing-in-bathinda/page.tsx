import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bathinda | TML Agency",
  description: "TML offers expert video editing services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bathinda", "video editing agency bathinda", "video editing company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-bathinda",
  },
  openGraph: {
    title: "Video Editing Agency in Bathinda | TML Agency",
    description: "TML offers expert video editing services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bathinda | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bathinda | TML Agency",
    description: "TML offers expert video editing services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
