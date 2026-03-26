import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Wellington | TML Agency",
  description: "TML offers expert video editing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["video editing wellington", "video editing agency wellington", "video editing wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-wellington",
  },
  openGraph: {
    title: "Best Video Editing Agency in Wellington | TML Agency",
    description: "TML offers expert video editing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Wellington | TML Agency",
    description: "TML offers expert video editing services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
