import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Music Release Agency in Milwaukee",
  description: "TML offers expert Music Release services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release milwaukee", "music release agency milwaukee", "music release company milwaukee"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-milwaukee",
  },
  openGraph: {
    title: "Music Release Agency in Milwaukee",
    description: "TML offers expert Music Release services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-milwaukee",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Milwaukee" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Milwaukee",
    description: "TML offers expert Music Release services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInMilwaukeePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
