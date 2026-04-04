import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bristol | TML Agency",
  description: "TML offers expert video editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bristol", "video editing agency bristol", "video editing company bristol"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-bristol",
  },
  openGraph: {
    title: "Video Editing Agency in Bristol | TML Agency",
    description: "TML offers expert video editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bristol | TML Agency",
    description: "TML offers expert video editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
