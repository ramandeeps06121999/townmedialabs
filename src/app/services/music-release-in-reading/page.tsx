import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Music Release Agency in Reading | TML Agency",
  description: "TML offers expert music release services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release reading", "music release agency reading", "music release company reading"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-reading",
  },
  openGraph: {
    title: "Music Release Agency in Reading | TML Agency",
    description: "TML offers expert music release services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-reading",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Reading | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Reading | TML Agency",
    description: "TML offers expert music release services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
