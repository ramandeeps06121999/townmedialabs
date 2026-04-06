import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_diego"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in San Diego",
  description: "TML offers expert Music Release services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release san diego", "music release agency san diego", "music release company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-san-diego",
  },
  openGraph: {
    title: "Music Release Agency in San Diego",
    description: "TML offers expert Music Release services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in San Diego" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in San Diego",
    description: "TML offers expert Music Release services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInSanDiegoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
