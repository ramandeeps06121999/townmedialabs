import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Music Release Agency in Kochi",
  description: "TML offers expert Music Release and Distribution services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution kochi", "music release and distribution agency kochi", "music release and distribution company kochi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-kochi",
  },
  openGraph: {
    title: "Music Release Agency in Kochi",
    description: "TML offers expert Music Release and Distribution services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-kochi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Kochi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Kochi",
    description: "TML offers expert Music Release and Distribution services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInKochiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
