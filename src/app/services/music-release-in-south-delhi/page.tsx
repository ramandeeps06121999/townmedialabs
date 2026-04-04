import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Music Release Agency in South Delhi | TML Agency",
  description: "TML offers expert music release and distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution south delhi", "music release and distribution agency south delhi", "music release and distribution company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-south-delhi",
  },
  openGraph: {
    title: "Music Release Agency in South Delhi | TML Agency",
    description: "TML offers expert music release and distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in South Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in South Delhi | TML Agency",
    description: "TML offers expert music release and distribution services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
