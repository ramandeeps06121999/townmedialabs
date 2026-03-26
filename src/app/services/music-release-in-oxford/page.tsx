import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Oxford | TML Agency",
  description: "TML offers expert music release services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release oxford", "music release agency oxford", "music release company oxford"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-oxford",
  },
  openGraph: {
    title: "Best Music Release Agency in Oxford | TML Agency",
    description: "TML offers expert music release services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-oxford",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Oxford | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Oxford | TML Agency",
    description: "TML offers expert music release services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
