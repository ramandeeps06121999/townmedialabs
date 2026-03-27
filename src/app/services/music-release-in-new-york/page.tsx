import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Music Release Agency in New York | TML Agency",
  description: "TML offers expert music release services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release new york", "music release agency new york", "music release company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-new-york",
  },
  openGraph: {
    title: "Best Music Release Agency in New York | TML Agency",
    description: "TML offers expert music release services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in New York | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in New York | TML Agency",
    description: "TML offers expert music release services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
