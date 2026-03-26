import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Preston | TML Agency",
  description: "TML offers expert music release services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release preston", "music release agency preston", "music release company preston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-preston",
  },
  openGraph: {
    title: "Best Music Release Agency in Preston | TML Agency",
    description: "TML offers expert music release services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-preston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Preston | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Preston | TML Agency",
    description: "TML offers expert music release services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function MusicReleaseInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
