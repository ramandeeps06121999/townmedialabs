import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Music Release Agency in Zirakpur",
  description: "TML offers expert Music Release services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release zirakpur", "music release agency zirakpur", "music release company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-zirakpur",
  },
  openGraph: {
    title: "Music Release Agency in Zirakpur",
    description: "TML offers expert Music Release services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Zirakpur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Zirakpur",
    description: "TML offers expert Music Release services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInZirakpurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
