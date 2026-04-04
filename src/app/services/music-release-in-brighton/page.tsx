import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Music Release Agency in Brighton | TML Agency",
  description: "TML offers expert music release services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release brighton", "music release agency brighton", "music release company brighton"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-brighton",
  },
  openGraph: {
    title: "Music Release Agency in Brighton | TML Agency",
    description: "TML offers expert music release services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-brighton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Brighton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Brighton | TML Agency",
    description: "TML offers expert music release services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
