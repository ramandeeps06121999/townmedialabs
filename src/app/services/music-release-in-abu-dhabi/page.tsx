import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Abu Dhabi",
  description: "TML offers expert Music Release services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release abu dhabi", "music release agency abu dhabi", "music release company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-abu-dhabi",
  },
  openGraph: {
    title: "Music Release Agency in Abu Dhabi",
    description: "TML offers expert Music Release services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Abu Dhabi",
    description: "TML offers expert Music Release services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
