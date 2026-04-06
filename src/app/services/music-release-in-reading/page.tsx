import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Music Release Agency in Reading",
  description: "TML offers expert Music Release services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release reading", "music release agency reading", "music release company reading"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-reading",
  },
  openGraph: {
    title: "Music Release Agency in Reading",
    description: "TML offers expert Music Release services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-reading",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Reading" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Reading",
    description: "TML offers expert Music Release services in Reading. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInReadingPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
