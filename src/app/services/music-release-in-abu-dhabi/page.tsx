import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert music release services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release abu dhabi", "music release agency abu dhabi", "music release company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-abu-dhabi",
  },
  openGraph: {
    title: "Best Music Release Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert music release services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert music release services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
