import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ajman | TML Agency",
  description: "TML offers expert music release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release ajman", "music release agency ajman", "music release company ajman"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ajman",
  },
  openGraph: {
    title: "Best Music Release Agency in Ajman | TML Agency",
    description: "TML offers expert music release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ajman | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Ajman | TML Agency",
    description: "TML offers expert music release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
