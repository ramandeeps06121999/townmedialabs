import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Music Release Agency in Bath",
  description: "TML offers expert Music Release services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release bath", "music release agency bath", "music release company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-bath",
  },
  openGraph: {
    title: "Music Release Agency in Bath",
    description: "TML offers expert Music Release services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bath" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Bath",
    description: "TML offers expert Music Release services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInBathPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
