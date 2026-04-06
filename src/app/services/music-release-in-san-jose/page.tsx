import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_jose"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in San Jose",
  description: "TML offers expert Music Release services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release san jose", "music release agency san jose", "music release company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-san-jose",
  },
  openGraph: {
    title: "Music Release Agency in San Jose",
    description: "TML offers expert Music Release services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in San Jose" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in San Jose",
    description: "TML offers expert Music Release services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSanJosePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
