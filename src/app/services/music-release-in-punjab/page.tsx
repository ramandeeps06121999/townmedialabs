import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Music Release Agency in Punjab",
  description: "TML offers expert Music Release services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release punjab", "music release agency punjab", "music release company punjab"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-punjab",
  },
  openGraph: {
    title: "Music Release Agency in Punjab",
    description: "TML offers expert Music Release services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-punjab",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Punjab" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Punjab",
    description: "TML offers expert Music Release services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInPunjabPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
