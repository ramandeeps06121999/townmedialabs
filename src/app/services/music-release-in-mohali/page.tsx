import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Music Release Agency in Mohali | TML Agency",
  description: "TML offers expert music release and distribution services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution mohali", "music release and distribution agency mohali", "music release and distribution company mohali"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-mohali",
  },
  openGraph: {
    title: "Music Release Agency in Mohali | TML Agency",
    description: "TML offers expert music release and distribution services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-mohali",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Mohali | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Mohali | TML Agency",
    description: "TML offers expert music release and distribution services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
