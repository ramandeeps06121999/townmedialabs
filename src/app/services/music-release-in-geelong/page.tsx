import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Music Release Agency in Geelong",
  description: "TML offers expert Music Release services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release geelong", "music release agency geelong", "music release company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-geelong",
  },
  openGraph: {
    title: "Music Release Agency in Geelong",
    description: "TML offers expert Music Release services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Geelong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Geelong",
    description: "TML offers expert Music Release services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInGeelongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
