import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Music Release Agency in Phoenix",
  description: "TML offers expert Music Release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release phoenix", "music release agency phoenix", "music release company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-phoenix",
  },
  openGraph: {
    title: "Music Release Agency in Phoenix",
    description: "TML offers expert Music Release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Phoenix" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Phoenix",
    description: "TML offers expert Music Release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInPhoenixPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
