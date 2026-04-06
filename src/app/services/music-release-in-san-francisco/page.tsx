import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in San Francisco",
  description: "TML offers expert Music Release services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release san francisco", "music release agency san francisco", "music release company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-san-francisco",
  },
  openGraph: {
    title: "Music Release Agency in San Francisco",
    description: "TML offers expert Music Release services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in San Francisco" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in San Francisco",
    description: "TML offers expert Music Release services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSanFranciscoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
