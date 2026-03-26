import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Sheffield | TML Agency",
  description: "TML offers expert music release services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release sheffield", "music release agency sheffield", "music release company sheffield"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-sheffield",
  },
  openGraph: {
    title: "Best Music Release Agency in Sheffield | TML Agency",
    description: "TML offers expert music release services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-sheffield",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Sheffield | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Sheffield | TML Agency",
    description: "TML offers expert music release services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
