import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Music Release Agency in Rajkot | TML Agency",
  description: "TML offers expert music release and distribution services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution rajkot", "music release and distribution agency rajkot", "music release and distribution company rajkot"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-rajkot",
  },
  openGraph: {
    title: "Music Release Agency in Rajkot | TML Agency",
    description: "TML offers expert music release and distribution services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-rajkot",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Rajkot | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Rajkot | TML Agency",
    description: "TML offers expert music release and distribution services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
