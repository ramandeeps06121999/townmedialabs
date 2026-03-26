import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Tauranga | TML Agency",
  description: "TML offers expert video editing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["video editing tauranga", "video editing agency tauranga", "video editing tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-tauranga",
  },
  openGraph: {
    title: "Best Video Editing Agency in Tauranga | TML Agency",
    description: "TML offers expert video editing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Tauranga | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Tauranga | TML Agency",
    description: "TML offers expert video editing services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
