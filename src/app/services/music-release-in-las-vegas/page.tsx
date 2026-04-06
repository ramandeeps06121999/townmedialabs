import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Las Vegas",
  description: "TML offers expert Music Release services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release las vegas", "music release agency las vegas", "music release company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-las-vegas",
  },
  openGraph: {
    title: "Music Release Agency in Las Vegas",
    description: "TML offers expert Music Release services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Las Vegas",
    description: "TML offers expert Music Release services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInLasVegasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
