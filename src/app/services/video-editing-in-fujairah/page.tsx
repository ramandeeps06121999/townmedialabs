import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Fujairah | TML Agency",
  description: "TML offers expert video editing services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing fujairah", "video editing agency fujairah", "video editing company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-fujairah",
  },
  openGraph: {
    title: "Video Editing Agency in Fujairah | TML Agency",
    description: "TML offers expert video editing services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Fujairah | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Fujairah | TML Agency",
    description: "TML offers expert video editing services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
