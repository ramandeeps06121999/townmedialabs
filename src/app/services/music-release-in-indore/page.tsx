import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Music Release Agency in Indore | TML Agency",
  description: "TML offers expert music release and distribution services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution indore", "music release and distribution agency indore", "music release and distribution company indore"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-indore",
  },
  openGraph: {
    title: "Music Release Agency in Indore | TML Agency",
    description: "TML offers expert music release and distribution services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Indore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Indore | TML Agency",
    description: "TML offers expert music release and distribution services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
