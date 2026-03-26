import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in San Jose | TML Agency",
  description: "TML offers expert music release services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release san jose", "music release agency san jose", "music release company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-san-jose",
  },
  openGraph: {
    title: "Best Music Release Agency in San Jose | TML Agency",
    description: "TML offers expert music release services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in San Jose | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in San Jose | TML Agency",
    description: "TML offers expert music release services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
