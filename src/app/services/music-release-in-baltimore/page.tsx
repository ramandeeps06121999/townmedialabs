import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Music Release Agency in Baltimore",
  description: "TML offers expert Music Release services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release baltimore", "music release agency baltimore", "music release company baltimore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-baltimore",
  },
  openGraph: {
    title: "Music Release Agency in Baltimore",
    description: "TML offers expert Music Release services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-baltimore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Baltimore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Baltimore",
    description: "TML offers expert Music Release services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInBaltimorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
