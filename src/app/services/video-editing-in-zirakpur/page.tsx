import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Zirakpur | TML Agency",
  description: "TML offers expert video editing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing zirakpur", "video editing agency zirakpur", "video editing company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-zirakpur",
  },
  openGraph: {
    title: "Best Video Editing Agency in Zirakpur | TML Agency",
    description: "TML offers expert video editing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Zirakpur | TML Agency",
    description: "TML offers expert video editing services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
