import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Music Release Agency in Seattle | TML Agency",
  description: "TML offers expert music release services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release seattle", "music release agency seattle", "music release company seattle"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-seattle",
  },
  openGraph: {
    title: "Music Release Agency in Seattle | TML Agency",
    description: "TML offers expert music release services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-seattle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Seattle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Seattle | TML Agency",
    description: "TML offers expert music release services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
