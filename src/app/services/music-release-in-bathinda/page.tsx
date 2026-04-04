import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Music Release Agency in Bathinda | TML Agency",
  description: "TML offers expert music release services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release bathinda", "music release agency bathinda", "music release company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-bathinda",
  },
  openGraph: {
    title: "Music Release Agency in Bathinda | TML Agency",
    description: "TML offers expert music release services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bathinda | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Bathinda | TML Agency",
    description: "TML offers expert music release services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
