import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Music Release Agency in Kansas City | TML Agency",
  description: "TML offers expert music release services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release kansas city", "music release agency kansas city", "music release company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-kansas-city",
  },
  openGraph: {
    title: "Best Music Release Agency in Kansas City | TML Agency",
    description: "TML offers expert music release services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Kansas City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Kansas City | TML Agency",
    description: "TML offers expert music release services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
