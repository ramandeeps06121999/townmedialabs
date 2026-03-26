import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Perth | TML Agency",
  description: "TML offers expert music release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release perth", "music release agency perth", "music release company perth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-perth",
  },
  openGraph: {
    title: "Best Music Release Agency in Perth | TML Agency",
    description: "TML offers expert music release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-perth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Perth | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Perth | TML Agency",
    description: "TML offers expert music release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
