import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Music Release Agency in Christchurch",
  description: "TML offers expert Music Release services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release christchurch", "music release agency christchurch", "music release christchurch nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-christchurch",
  },
  openGraph: {
    title: "Music Release Agency in Christchurch",
    description: "TML offers expert Music Release services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-christchurch",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Christchurch" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Christchurch",
    description: "TML offers expert Music Release services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInChristchurchPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
