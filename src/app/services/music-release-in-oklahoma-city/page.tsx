import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Oklahoma City",
  description: "TML offers expert Music Release services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release oklahoma city", "music release agency oklahoma city", "music release company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-oklahoma-city",
  },
  openGraph: {
    title: "Music Release Agency in Oklahoma City",
    description: "TML offers expert Music Release services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Oklahoma City",
    description: "TML offers expert Music Release services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
