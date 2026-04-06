import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Music Release Agency in Nashville",
  description: "TML offers expert Music Release services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release nashville", "music release agency nashville", "music release company nashville"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-nashville",
  },
  openGraph: {
    title: "Music Release Agency in Nashville",
    description: "TML offers expert Music Release services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-nashville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Nashville" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Nashville",
    description: "TML offers expert Music Release services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInNashvillePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
