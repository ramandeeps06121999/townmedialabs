import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["palmerston_north"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Palmerston North",
  description: "TML offers expert Music Release services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release palmerston north", "music release agency palmerston north", "music release palmerston north nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-palmerston-north",
  },
  openGraph: {
    title: "Music Release Agency in Palmerston North",
    description: "TML offers expert Music Release services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-palmerston-north",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Palmerston North" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Palmerston North",
    description: "TML offers expert Music Release services in Palmerston North, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInPalmerstonNorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
