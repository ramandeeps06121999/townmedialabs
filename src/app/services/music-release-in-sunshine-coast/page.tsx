import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Sunshine Coast",
  description: "TML offers expert Music Release services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release sunshine coast", "music release agency sunshine coast", "music release company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-sunshine-coast",
  },
  openGraph: {
    title: "Music Release Agency in Sunshine Coast",
    description: "TML offers expert Music Release services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Sunshine Coast",
    description: "TML offers expert Music Release services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
