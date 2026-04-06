import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Salt Lake City",
  description: "TML offers expert Music Release services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release salt lake city", "music release agency salt lake city", "music release company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-salt-lake-city",
  },
  openGraph: {
    title: "Music Release Agency in Salt Lake City",
    description: "TML offers expert Music Release services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Salt Lake City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Salt Lake City",
    description: "TML offers expert Music Release services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSaltLakeCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
