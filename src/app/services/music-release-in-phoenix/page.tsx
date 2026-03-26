import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Phoenix | TML Agency",
  description: "TML offers expert music release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release phoenix", "music release agency phoenix", "music release company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-phoenix",
  },
  openGraph: {
    title: "Best Music Release Agency in Phoenix | TML Agency",
    description: "TML offers expert music release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Phoenix | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Phoenix | TML Agency",
    description: "TML offers expert music release services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
