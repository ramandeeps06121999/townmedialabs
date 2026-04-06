import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Music Release Agency in Fujairah",
  description: "TML offers expert Music Release services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release fujairah", "music release agency fujairah", "music release company fujairah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-fujairah",
  },
  openGraph: {
    title: "Music Release Agency in Fujairah",
    description: "TML offers expert Music Release services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-fujairah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Fujairah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Fujairah",
    description: "TML offers expert Music Release services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInFujairahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
