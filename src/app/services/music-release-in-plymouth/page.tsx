import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Music Release Agency in Plymouth",
  description: "TML offers expert Music Release services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release plymouth", "music release agency plymouth", "music release company plymouth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-plymouth",
  },
  openGraph: {
    title: "Music Release Agency in Plymouth",
    description: "TML offers expert Music Release services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-plymouth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Plymouth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Plymouth",
    description: "TML offers expert Music Release services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInPlymouthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
