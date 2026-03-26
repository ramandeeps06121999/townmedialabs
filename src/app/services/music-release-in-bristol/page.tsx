import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bristol | TML Agency",
  description: "TML offers expert music release services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release bristol", "music release agency bristol", "music release company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-bristol",
  },
  openGraph: {
    title: "Best Music Release Agency in Bristol | TML Agency",
    description: "TML offers expert music release services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bristol | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Bristol | TML Agency",
    description: "TML offers expert music release services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
