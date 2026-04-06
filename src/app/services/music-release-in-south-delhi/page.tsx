import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Music Release Agency in South Delhi",
  description: "TML offers expert Music Release and Distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution south delhi", "music release and distribution agency south delhi", "music release and distribution company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-south-delhi",
  },
  openGraph: {
    title: "Music Release Agency in South Delhi",
    description: "TML offers expert Music Release and Distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in South Delhi",
    description: "TML offers expert Music Release and Distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
