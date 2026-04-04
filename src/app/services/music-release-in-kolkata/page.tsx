import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Music Release Agency in Kolkata | TML Agency",
  description: "TML offers expert music release and distribution services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution kolkata", "music release and distribution agency kolkata", "music release and distribution company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-kolkata",
  },
  openGraph: {
    title: "Music Release Agency in Kolkata | TML Agency",
    description: "TML offers expert music release and distribution services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Kolkata | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Kolkata | TML Agency",
    description: "TML offers expert music release and distribution services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
