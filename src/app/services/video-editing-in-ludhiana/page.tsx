import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ludhiana | TML Agency",
  description: "TML offers expert video editing services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ludhiana", "video editing agency ludhiana", "video editing company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-ludhiana",
  },
  openGraph: {
    title: "Best Video Editing Agency in Ludhiana | TML Agency",
    description: "TML offers expert video editing services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Ludhiana | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Ludhiana | TML Agency",
    description: "TML offers expert video editing services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
