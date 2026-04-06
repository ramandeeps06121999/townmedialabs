import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Music Release Agency in Dunedin",
  description: "TML offers expert Music Release services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["music release dunedin", "music release agency dunedin", "music release dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-dunedin",
  },
  openGraph: {
    title: "Music Release Agency in Dunedin",
    description: "TML offers expert Music Release services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Dunedin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Dunedin",
    description: "TML offers expert Music Release services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInDunedinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
