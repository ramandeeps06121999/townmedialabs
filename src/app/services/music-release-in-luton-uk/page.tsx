import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Music Release Agency in Luton | TML Agency",
  description: "TML offers expert music release services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release luton", "music release agency luton", "music release company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-luton-uk",
  },
  openGraph: {
    title: "Best Music Release Agency in Luton | TML Agency",
    description: "TML offers expert music release services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Luton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Luton | TML Agency",
    description: "TML offers expert music release services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
