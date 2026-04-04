import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Video Editing Agency in York | TML Agency",
  description: "TML offers expert video editing services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing york", "video editing agency york", "video editing company york"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-york",
  },
  openGraph: {
    title: "Video Editing Agency in York | TML Agency",
    description: "TML offers expert video editing services in York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in York | TML Agency",
    description: "TML offers expert video editing services in York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
