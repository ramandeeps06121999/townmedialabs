import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Pune | TML Agency",
  description: "TML offers expert video editing services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing pune", "video editing agency pune", "video editing company pune"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-pune",
  },
  openGraph: {
    title: "Video Editing Agency in Pune | TML Agency",
    description: "TML offers expert video editing services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Pune | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Pune | TML Agency",
    description: "TML offers expert video editing services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
