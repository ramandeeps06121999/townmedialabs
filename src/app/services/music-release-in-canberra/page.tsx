import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Music Release Agency in Canberra | TML Agency",
  description: "TML offers expert music release services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release canberra", "music release agency canberra", "music release company canberra"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-canberra",
  },
  openGraph: {
    title: "Music Release Agency in Canberra | TML Agency",
    description: "TML offers expert music release services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Canberra | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Canberra | TML Agency",
    description: "TML offers expert music release services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
