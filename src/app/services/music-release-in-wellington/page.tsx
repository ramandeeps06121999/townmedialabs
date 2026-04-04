import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Music Release Agency in Wellington | TML Agency",
  description: "TML offers expert music release services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release wellington", "music release agency wellington", "music release wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-wellington",
  },
  openGraph: {
    title: "Music Release Agency in Wellington | TML Agency",
    description: "TML offers expert music release services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Wellington | TML Agency",
    description: "TML offers expert music release services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
