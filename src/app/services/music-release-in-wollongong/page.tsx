import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Music Release Agency in Wollongong",
  description: "TML offers expert Music Release services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release wollongong", "music release agency wollongong", "music release company wollongong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-wollongong",
  },
  openGraph: {
    title: "Music Release Agency in Wollongong",
    description: "TML offers expert Music Release services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-wollongong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Wollongong",
    description: "TML offers expert Music Release services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInWollongongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
