import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Music Release Agency in Ambala",
  description: "TML offers expert Music Release and Distribution services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ambala", "music release and distribution agency ambala", "music release and distribution company ambala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ambala",
  },
  openGraph: {
    title: "Music Release Agency in Ambala",
    description: "TML offers expert Music Release and Distribution services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ambala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ambala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Ambala",
    description: "TML offers expert Music Release and Distribution services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInAmbalaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
