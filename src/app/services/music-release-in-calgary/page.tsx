import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["calgary"];

export const metadata: Metadata = {
  title: "Music Release Agency in Calgary",
  description: "TML offers expert Music Release services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release calgary", "music release agency calgary"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-calgary",
  },
  openGraph: {
    title: "Music Release Agency in Calgary",
    description: "TML offers expert Music Release services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-calgary",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Calgary" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Calgary",
    description: "TML offers expert Music Release services in Calgary, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
