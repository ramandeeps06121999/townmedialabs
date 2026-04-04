import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in San Diego | TML Agency",
  description: "TML offers expert video editing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing san diego", "video editing agency san diego", "video editing company san diego"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-san-diego",
  },
  openGraph: {
    title: "Video Editing Agency in San Diego | TML Agency",
    description: "TML offers expert video editing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in San Diego | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in San Diego | TML Agency",
    description: "TML offers expert video editing services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
