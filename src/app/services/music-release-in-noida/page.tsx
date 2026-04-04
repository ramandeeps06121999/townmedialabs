import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Music Release Agency in Noida | TML Agency",
  description: "TML offers expert music release and distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution noida", "music release and distribution agency noida", "music release and distribution company noida"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-noida",
  },
  openGraph: {
    title: "Music Release Agency in Noida | TML Agency",
    description: "TML offers expert music release and distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Noida | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Noida | TML Agency",
    description: "TML offers expert music release and distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
