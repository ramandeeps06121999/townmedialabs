import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Music Release Agency in Jaipur",
  description: "TML offers expert Music Release and Distribution services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution jaipur", "music release and distribution agency jaipur", "music release and distribution company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-jaipur",
  },
  openGraph: {
    title: "Music Release Agency in Jaipur",
    description: "TML offers expert Music Release and Distribution services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Jaipur",
    description: "TML offers expert Music Release and Distribution services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
