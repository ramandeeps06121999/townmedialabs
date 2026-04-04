import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Portland | TML Agency",
  description: "TML offers expert video editing services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing portland", "video editing agency portland", "video editing company portland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-portland",
  },
  openGraph: {
    title: "Video Editing Agency in Portland | TML Agency",
    description: "TML offers expert video editing services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-portland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Portland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Portland | TML Agency",
    description: "TML offers expert video editing services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
