import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Music Release Agency in Austin | TML Agency",
  description: "TML offers expert music release services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release austin", "music release agency austin", "music release company austin"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-austin",
  },
  openGraph: {
    title: "Music Release Agency in Austin | TML Agency",
    description: "TML offers expert music release services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Austin | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Austin | TML Agency",
    description: "TML offers expert music release services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
