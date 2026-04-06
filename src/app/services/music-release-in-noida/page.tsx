import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Music Release Agency in Noida",
  description: "TML offers expert Music Release and Distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution noida", "music release and distribution agency noida", "music release and distribution company noida"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-noida",
  },
  openGraph: {
    title: "Music Release Agency in Noida",
    description: "TML offers expert Music Release and Distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Noida" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Noida",
    description: "TML offers expert Music Release and Distribution services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInNoidaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
