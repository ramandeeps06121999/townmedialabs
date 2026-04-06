import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Music Release Agency in Cheltenham",
  description: "TML offers expert Music Release services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release cheltenham", "music release agency cheltenham", "music release company cheltenham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-cheltenham",
  },
  openGraph: {
    title: "Music Release Agency in Cheltenham",
    description: "TML offers expert Music Release services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-cheltenham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Cheltenham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Cheltenham",
    description: "TML offers expert Music Release services in Cheltenham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInCheltenhamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
