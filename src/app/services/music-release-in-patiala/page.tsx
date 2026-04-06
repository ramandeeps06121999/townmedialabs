import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Music Release Agency in Patiala",
  description: "TML offers expert Music Release and Distribution services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution patiala", "music release and distribution agency patiala", "music release and distribution company patiala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-patiala",
  },
  openGraph: {
    title: "Music Release Agency in Patiala",
    description: "TML offers expert Music Release and Distribution services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Patiala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Patiala",
    description: "TML offers expert Music Release and Distribution services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInPatialaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
