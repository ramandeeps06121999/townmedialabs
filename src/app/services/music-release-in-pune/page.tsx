import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Pune | TML Agency",
  description: "TML offers expert music release and distribution services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution pune", "music release and distribution agency pune", "music release and distribution company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-pune",
  },
  openGraph: {
    title: "Best Music Release Agency in Pune | TML Agency",
    description: "TML offers expert music release and distribution services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Pune | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Pune | TML Agency",
    description: "TML offers expert music release and distribution services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
