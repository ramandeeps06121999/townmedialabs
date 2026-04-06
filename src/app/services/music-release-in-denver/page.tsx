import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Music Release Agency in Denver",
  description: "TML offers expert Music Release services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release denver", "music release agency denver", "music release company denver"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-denver",
  },
  openGraph: {
    title: "Music Release Agency in Denver",
    description: "TML offers expert Music Release services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-denver",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Denver" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Denver",
    description: "TML offers expert Music Release services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInDenverPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
