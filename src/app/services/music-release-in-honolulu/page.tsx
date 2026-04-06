import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Music Release Agency in Honolulu",
  description: "TML offers expert Music Release services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release honolulu", "music release agency honolulu", "music release company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-honolulu",
  },
  openGraph: {
    title: "Music Release Agency in Honolulu",
    description: "TML offers expert Music Release services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Honolulu" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Honolulu",
    description: "TML offers expert Music Release services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInHonoluluPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
