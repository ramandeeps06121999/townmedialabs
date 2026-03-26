import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Newcastle | TML Agency",
  description: "TML offers expert music release services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release newcastle", "music release agency newcastle", "music release company newcastle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-newcastle-au",
  },
  openGraph: {
    title: "Best Music Release Agency in Newcastle | TML Agency",
    description: "TML offers expert music release services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-newcastle-au",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Newcastle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Newcastle | TML Agency",
    description: "TML offers expert music release services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInNewcastleAuPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
