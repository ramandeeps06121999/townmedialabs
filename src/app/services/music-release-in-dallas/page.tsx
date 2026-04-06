import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Music Release Agency in Dallas",
  description: "TML offers expert Music Release services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release dallas", "music release agency dallas", "music release company dallas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-dallas",
  },
  openGraph: {
    title: "Music Release Agency in Dallas",
    description: "TML offers expert Music Release services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-dallas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Dallas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Dallas",
    description: "TML offers expert Music Release services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInDallasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
