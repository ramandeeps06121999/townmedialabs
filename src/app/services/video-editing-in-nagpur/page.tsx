import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Nagpur | TML Agency",
  description: "TML offers expert video editing services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing nagpur", "video editing agency nagpur", "video editing company nagpur"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-nagpur",
  },
  openGraph: {
    title: "Video Editing Agency in Nagpur | TML Agency",
    description: "TML offers expert video editing services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-nagpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Nagpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Nagpur | TML Agency",
    description: "TML offers expert video editing services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
