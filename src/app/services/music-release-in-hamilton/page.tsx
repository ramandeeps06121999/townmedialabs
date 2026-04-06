import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Music Release Agency in Hamilton",
  description: "TML offers expert Music Release services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["music release hamilton", "music release agency hamilton", "music release hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-hamilton",
  },
  openGraph: {
    title: "Music Release Agency in Hamilton",
    description: "TML offers expert Music Release services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Hamilton",
    description: "TML offers expert Music Release services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
