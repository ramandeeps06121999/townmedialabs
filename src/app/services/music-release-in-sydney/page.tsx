import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Music Release Agency in Sydney",
  description: "TML offers expert Music Release services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release sydney", "music release agency sydney", "music release company sydney"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-sydney",
  },
  openGraph: {
    title: "Music Release Agency in Sydney",
    description: "TML offers expert Music Release services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-sydney",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Sydney",
    description: "TML offers expert Music Release services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInSydneyPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
