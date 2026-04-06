import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Music Release Agency in Raleigh",
  description: "TML offers expert Music Release services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release raleigh", "music release agency raleigh", "music release company raleigh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-raleigh",
  },
  openGraph: {
    title: "Music Release Agency in Raleigh",
    description: "TML offers expert Music Release services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-raleigh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Raleigh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Raleigh",
    description: "TML offers expert Music Release services in Raleigh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInRaleighPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
