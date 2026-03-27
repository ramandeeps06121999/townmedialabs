import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Music Release Agency in Columbus | TML Agency",
  description: "TML offers expert music release services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release columbus", "music release agency columbus", "music release company columbus"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-columbus-oh",
  },
  openGraph: {
    title: "Best Music Release Agency in Columbus | TML Agency",
    description: "TML offers expert music release services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-columbus-oh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Columbus | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Columbus | TML Agency",
    description: "TML offers expert music release services in Columbus. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
