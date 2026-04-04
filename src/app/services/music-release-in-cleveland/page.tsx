import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cleveland"];

export const metadata: Metadata = {
  title: "Music Release Agency in Cleveland | TML Agency",
  description: "TML offers expert music release services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release cleveland", "music release agency cleveland", "music release company cleveland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-cleveland",
  },
  openGraph: {
    title: "Music Release Agency in Cleveland | TML Agency",
    description: "TML offers expert music release services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-cleveland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Cleveland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Cleveland | TML Agency",
    description: "TML offers expert music release services in Cleveland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInClevelandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
