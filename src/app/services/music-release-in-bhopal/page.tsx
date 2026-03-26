import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Bhopal | TML Agency",
  description: "TML offers expert music release and distribution services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution bhopal", "music release and distribution agency bhopal", "music release and distribution company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-bhopal",
  },
  openGraph: {
    title: "Best Music Release Agency in Bhopal | TML Agency",
    description: "TML offers expert music release and distribution services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Bhopal | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Bhopal | TML Agency",
    description: "TML offers expert music release and distribution services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
