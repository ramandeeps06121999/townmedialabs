import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Music Release Agency in Vadodara | TML Agency",
  description: "TML offers expert music release and distribution services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution vadodara", "music release and distribution agency vadodara", "music release and distribution company vadodara"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/music-release-in-vadodara",
  },
  openGraph: {
    title: "Music Release Agency in Vadodara | TML Agency",
    description: "TML offers expert music release and distribution services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/music-release-in-vadodara",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Vadodara | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Vadodara | TML Agency",
    description: "TML offers expert music release and distribution services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
