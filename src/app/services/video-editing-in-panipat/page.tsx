import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Panipat | TML Agency",
  description: "TML offers expert video editing services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing panipat", "video editing agency panipat", "video editing company panipat"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-panipat",
  },
  openGraph: {
    title: "Video Editing Agency in Panipat | TML Agency",
    description: "TML offers expert video editing services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-panipat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Panipat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Panipat | TML Agency",
    description: "TML offers expert video editing services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
