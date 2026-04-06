import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Music Release Agency in Ajman",
  description: "TML offers expert Music Release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release ajman", "music release agency ajman", "music release company ajman"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ajman",
  },
  openGraph: {
    title: "Music Release Agency in Ajman",
    description: "TML offers expert Music Release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ajman" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Ajman",
    description: "TML offers expert Music Release services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInAjmanPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
