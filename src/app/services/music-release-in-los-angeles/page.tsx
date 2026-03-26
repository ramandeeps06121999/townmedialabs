import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Los Angeles | TML Agency",
  description: "TML offers expert music release services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release los angeles", "music release agency los angeles", "music release company los angeles"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-los-angeles",
  },
  openGraph: {
    title: "Best Music Release Agency in Los Angeles | TML Agency",
    description: "TML offers expert music release services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-los-angeles",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Los Angeles | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Los Angeles | TML Agency",
    description: "TML offers expert music release services in Los Angeles. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
