import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Music Release Agency in Orlando",
  description: "TML offers expert Music Release services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release orlando", "music release agency orlando", "music release company orlando"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-orlando",
  },
  openGraph: {
    title: "Music Release Agency in Orlando",
    description: "TML offers expert Music Release services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-orlando",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Orlando" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Orlando",
    description: "TML offers expert Music Release services in Orlando. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInOrlandoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
