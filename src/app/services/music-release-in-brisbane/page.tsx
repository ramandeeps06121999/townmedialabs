import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Music Release Agency in Brisbane",
  description: "TML offers expert Music Release services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release brisbane", "music release agency brisbane", "music release company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-brisbane",
  },
  openGraph: {
    title: "Music Release Agency in Brisbane",
    description: "TML offers expert Music Release services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Brisbane",
    description: "TML offers expert Music Release services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
