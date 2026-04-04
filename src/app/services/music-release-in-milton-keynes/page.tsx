import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Milton Keynes | TML Agency",
  description: "TML offers expert music release services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release milton keynes", "music release agency milton keynes", "music release company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-milton-keynes",
  },
  openGraph: {
    title: "Music Release Agency in Milton Keynes | TML Agency",
    description: "TML offers expert music release services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Milton Keynes | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Milton Keynes | TML Agency",
    description: "TML offers expert music release services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInMiltonKeynesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
