import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Music Release Agency in Pune",
  description: "TML offers expert Music Release and Distribution services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution pune", "music release and distribution agency pune", "music release and distribution company pune"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-pune",
  },
  openGraph: {
    title: "Music Release Agency in Pune",
    description: "TML offers expert Music Release and Distribution services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-pune",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Pune" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Pune",
    description: "TML offers expert Music Release and Distribution services in Pune. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInPunePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
