import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Canberra | TML Agency",
  description: "TML offers expert video editing services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing canberra", "video editing agency canberra", "video editing company canberra"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-canberra",
  },
  openGraph: {
    title: "Video Editing Agency in Canberra | TML Agency",
    description: "TML offers expert video editing services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Canberra | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Canberra | TML Agency",
    description: "TML offers expert video editing services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
