import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Music Release Agency in London",
  description: "TML offers expert Music Release services in London. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release london", "music release agency london", "music release company london"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-london",
  },
  openGraph: {
    title: "Music Release Agency in London",
    description: "TML offers expert Music Release services in London. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-london",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in London" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in London",
    description: "TML offers expert Music Release services in London. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInLondonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
