import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Music Release Agency in Cardiff | TML Agency",
  description: "TML offers expert music release services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release cardiff", "music release agency cardiff", "music release company cardiff"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-cardiff",
  },
  openGraph: {
    title: "Music Release Agency in Cardiff | TML Agency",
    description: "TML offers expert music release services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-cardiff",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Cardiff | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Cardiff | TML Agency",
    description: "TML offers expert music release services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
