import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in San Antonio | TML Agency",
  description: "TML offers expert music release services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release san antonio", "music release agency san antonio", "music release company san antonio"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-san-antonio",
  },
  openGraph: {
    title: "Music Release Agency in San Antonio | TML Agency",
    description: "TML offers expert music release services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-san-antonio",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in San Antonio | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in San Antonio | TML Agency",
    description: "TML offers expert music release services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
