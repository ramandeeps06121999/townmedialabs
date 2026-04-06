import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Music Release Agency in Manchester",
  description: "TML offers expert Music Release services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release manchester", "music release agency manchester", "music release company manchester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-manchester",
  },
  openGraph: {
    title: "Music Release Agency in Manchester",
    description: "TML offers expert Music Release services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Manchester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Manchester",
    description: "TML offers expert Music Release services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInManchesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
