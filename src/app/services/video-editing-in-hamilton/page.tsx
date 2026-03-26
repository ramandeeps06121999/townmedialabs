import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Hamilton | TML Agency",
  description: "TML offers expert video editing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["video editing hamilton", "video editing agency hamilton", "video editing hamilton nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-hamilton",
  },
  openGraph: {
    title: "Best Video Editing Agency in Hamilton | TML Agency",
    description: "TML offers expert video editing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Hamilton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Hamilton | TML Agency",
    description: "TML offers expert video editing services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
