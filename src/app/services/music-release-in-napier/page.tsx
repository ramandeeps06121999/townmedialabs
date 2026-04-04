import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Music Release Agency in Napier | TML Agency",
  description: "TML offers expert music release services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release napier", "music release agency napier", "music release napier nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-napier",
  },
  openGraph: {
    title: "Music Release Agency in Napier | TML Agency",
    description: "TML offers expert music release services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Napier | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Napier | TML Agency",
    description: "TML offers expert music release services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
