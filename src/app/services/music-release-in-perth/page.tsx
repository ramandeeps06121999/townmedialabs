import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Music Release Agency in Perth",
  description: "TML offers expert Music Release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release perth", "music release agency perth", "music release company perth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-perth",
  },
  openGraph: {
    title: "Music Release Agency in Perth",
    description: "TML offers expert Music Release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-perth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Perth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Perth",
    description: "TML offers expert Music Release services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInPerthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
