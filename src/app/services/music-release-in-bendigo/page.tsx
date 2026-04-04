import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Music Release Agency in Bendigo | TML Agency",
  description: "TML offers expert music release services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release bendigo", "music release agency bendigo", "music release company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-bendigo",
  },
  openGraph: {
    title: "Music Release Agency in Bendigo | TML Agency",
    description: "TML offers expert music release services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bendigo | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Bendigo | TML Agency",
    description: "TML offers expert music release services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
