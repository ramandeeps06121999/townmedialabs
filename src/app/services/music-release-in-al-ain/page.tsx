import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Music Release Agency in Al Ain | TML Agency",
  description: "TML offers expert music release services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release al ain", "music release agency al ain", "music release company al ain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-al-ain",
  },
  openGraph: {
    title: "Best Music Release Agency in Al Ain | TML Agency",
    description: "TML offers expert music release services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Al Ain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Al Ain | TML Agency",
    description: "TML offers expert music release services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicReleaseInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
