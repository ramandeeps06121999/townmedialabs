import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Music Release Agency in Ras Al Khaimah",
  description: "TML offers expert Music Release services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release ras al khaimah", "music release agency ras al khaimah", "music release company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Music Release Agency in Ras Al Khaimah",
    description: "TML offers expert Music Release services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Ras Al Khaimah",
    description: "TML offers expert Music Release services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
