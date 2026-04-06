import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Music Release Agency in Bangalore",
  description: "TML offers expert Music Release and Distribution services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution bangalore", "music release and distribution agency bangalore", "music release and distribution company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-bangalore",
  },
  openGraph: {
    title: "Music Release Agency in Bangalore",
    description: "TML offers expert Music Release and Distribution services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Bangalore",
    description: "TML offers expert Music Release and Distribution services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInBangalorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
