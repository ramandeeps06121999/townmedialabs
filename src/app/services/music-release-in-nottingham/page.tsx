import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["nottingham"];

export const metadata: Metadata = {
  title: "Music Release Agency in Nottingham",
  description: "TML offers expert Music Release services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release nottingham", "music release agency nottingham", "music release company nottingham"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-nottingham",
  },
  openGraph: {
    title: "Music Release Agency in Nottingham",
    description: "TML offers expert Music Release services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-nottingham",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Nottingham" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Nottingham",
    description: "TML offers expert Music Release services in Nottingham. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInNottinghamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
