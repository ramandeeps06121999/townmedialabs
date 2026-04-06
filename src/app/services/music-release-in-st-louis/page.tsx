import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in St. Louis",
  description: "TML offers expert Music Release services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release st. louis", "music release agency st. louis", "music release company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-st-louis",
  },
  openGraph: {
    title: "Music Release Agency in St. Louis",
    description: "TML offers expert Music Release services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in St. Louis",
    description: "TML offers expert Music Release services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
