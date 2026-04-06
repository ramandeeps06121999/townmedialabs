import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Music Release Agency in Mumbai",
  description: "TML offers expert Music Release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release mumbai", "music release agency mumbai", "music release company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-mumbai",
  },
  openGraph: {
    title: "Music Release Agency in Mumbai",
    description: "TML offers expert Music Release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Mumbai",
    description: "TML offers expert Music Release services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
