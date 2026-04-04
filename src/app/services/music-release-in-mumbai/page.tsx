import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Music Release Agency in Mumbai | TML Agency",
  description: "TML offers expert music release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release mumbai", "music release agency mumbai", "music release company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-mumbai",
  },
  openGraph: {
    title: "Music Release Agency in Mumbai | TML Agency",
    description: "TML offers expert music release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Mumbai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Mumbai | TML Agency",
    description: "TML offers expert music release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
