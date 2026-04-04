import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Music Release Agency in Jalandhar | TML Agency",
  description: "TML offers expert music release and distribution services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution jalandhar", "music release and distribution agency jalandhar", "music release and distribution company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-jalandhar",
  },
  openGraph: {
    title: "Music Release Agency in Jalandhar | TML Agency",
    description: "TML offers expert music release and distribution services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Jalandhar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Jalandhar | TML Agency",
    description: "TML offers expert music release and distribution services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
