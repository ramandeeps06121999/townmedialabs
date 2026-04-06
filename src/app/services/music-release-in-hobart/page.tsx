import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Music Release Agency in Hobart",
  description: "TML offers expert Music Release services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release hobart", "music release agency hobart", "music release company hobart"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-hobart",
  },
  openGraph: {
    title: "Music Release Agency in Hobart",
    description: "TML offers expert Music Release services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Hobart" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Hobart",
    description: "TML offers expert Music Release services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInHobartPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
