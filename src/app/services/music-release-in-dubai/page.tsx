import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Music Release Agency in Dubai | TML Agency",
  description: "TML offers expert music release services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release dubai", "music release agency dubai", "music release company dubai"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-dubai",
  },
  openGraph: {
    title: "Music Release Agency in Dubai | TML Agency",
    description: "TML offers expert music release services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-dubai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Dubai | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Dubai | TML Agency",
    description: "TML offers expert music release services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
