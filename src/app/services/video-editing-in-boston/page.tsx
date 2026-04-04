import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Boston | TML Agency",
  description: "TML offers expert video editing services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing boston", "video editing agency boston", "video editing company boston"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-boston",
  },
  openGraph: {
    title: "Video Editing Agency in Boston | TML Agency",
    description: "TML offers expert video editing services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-boston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Boston | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Boston | TML Agency",
    description: "TML offers expert video editing services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
