import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Nagpur | TML Agency",
  description: "TML offers expert music release and distribution services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution nagpur", "music release and distribution agency nagpur", "music release and distribution company nagpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-nagpur",
  },
  openGraph: {
    title: "Best Music Release Agency in Nagpur | TML Agency",
    description: "TML offers expert music release and distribution services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-nagpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Nagpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Nagpur | TML Agency",
    description: "TML offers expert music release and distribution services in Nagpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
