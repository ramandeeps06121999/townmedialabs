import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Tauranga | TML Agency",
  description: "TML offers expert music release services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release tauranga", "music release agency tauranga", "music release tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-tauranga",
  },
  openGraph: {
    title: "Best Music Release Agency in Tauranga | TML Agency",
    description: "TML offers expert music release services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Tauranga | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Tauranga | TML Agency",
    description: "TML offers expert music release services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
