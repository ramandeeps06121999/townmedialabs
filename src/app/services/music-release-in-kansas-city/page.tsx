import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Kansas City",
  description: "TML offers expert Music Release services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release kansas city", "music release agency kansas city", "music release company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-kansas-city",
  },
  openGraph: {
    title: "Music Release Agency in Kansas City",
    description: "TML offers expert Music Release services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Kansas City",
    description: "TML offers expert Music Release services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
