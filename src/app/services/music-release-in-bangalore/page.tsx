import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Music Release Agency in Bangalore | TML Agency",
  description: "TML offers expert music release and distribution services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution bangalore", "music release and distribution agency bangalore", "music release and distribution company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-bangalore",
  },
  openGraph: {
    title: "Music Release Agency in Bangalore | TML Agency",
    description: "TML offers expert music release and distribution services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bangalore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Bangalore | TML Agency",
    description: "TML offers expert music release and distribution services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
