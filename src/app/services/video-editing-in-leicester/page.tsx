import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leicester"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Leicester | TML Agency",
  description: "TML offers expert video editing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing leicester", "video editing agency leicester", "video editing company leicester"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-leicester",
  },
  openGraph: {
    title: "Video Editing Agency in Leicester | TML Agency",
    description: "TML offers expert video editing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-leicester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Leicester | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Leicester | TML Agency",
    description: "TML offers expert video editing services in Leicester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInLeicesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
