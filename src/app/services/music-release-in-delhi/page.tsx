import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Music Release Agency in Delhi | TML Agency",
  description: "TML offers expert music release services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release delhi", "music release agency delhi", "music release company delhi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-delhi",
  },
  openGraph: {
    title: "Music Release Agency in Delhi | TML Agency",
    description: "TML offers expert music release services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Delhi | TML Agency",
    description: "TML offers expert music release services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
