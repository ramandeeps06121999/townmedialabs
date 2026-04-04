import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Music Release Agency in Indianapolis | TML Agency",
  description: "TML offers expert music release services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release indianapolis", "music release agency indianapolis", "music release company indianapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-indianapolis",
  },
  openGraph: {
    title: "Music Release Agency in Indianapolis | TML Agency",
    description: "TML offers expert music release services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-indianapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Indianapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Indianapolis | TML Agency",
    description: "TML offers expert music release services in Indianapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
