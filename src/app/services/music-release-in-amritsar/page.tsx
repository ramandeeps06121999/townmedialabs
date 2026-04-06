import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Music Release Agency in Amritsar",
  description: "TML offers expert Music Release and Distribution services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution amritsar", "music release and distribution agency amritsar", "music release and distribution company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-amritsar",
  },
  openGraph: {
    title: "Music Release Agency in Amritsar",
    description: "TML offers expert Music Release and Distribution services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Amritsar",
    description: "TML offers expert Music Release and Distribution services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
