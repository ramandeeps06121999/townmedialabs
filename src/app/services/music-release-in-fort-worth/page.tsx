import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Fort Worth",
  description: "TML offers expert Music Release services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release fort worth", "music release agency fort worth", "music release company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-fort-worth",
  },
  openGraph: {
    title: "Music Release Agency in Fort Worth",
    description: "TML offers expert Music Release services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Fort Worth",
    description: "TML offers expert Music Release services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
