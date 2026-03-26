import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Zirakpur | TML Agency",
  description: "TML offers expert music release services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release zirakpur", "music release agency zirakpur", "music release company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-zirakpur",
  },
  openGraph: {
    title: "Best Music Release Agency in Zirakpur | TML Agency",
    description: "TML offers expert music release services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Zirakpur | TML Agency",
    description: "TML offers expert music release services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
