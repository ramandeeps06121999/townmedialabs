import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Music Release Agency in Gold Coast | TML Agency",
  description: "TML offers expert music release services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release gold coast", "music release agency gold coast", "music release company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-gold-coast",
  },
  openGraph: {
    title: "Best Music Release Agency in Gold Coast | TML Agency",
    description: "TML offers expert music release services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Gold Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Gold Coast | TML Agency",
    description: "TML offers expert music release services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
