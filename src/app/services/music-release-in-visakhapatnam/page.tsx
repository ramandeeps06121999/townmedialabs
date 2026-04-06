import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Music Release Agency in Visakhapatnam",
  description: "TML offers expert Music Release and Distribution services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution visakhapatnam", "music release and distribution agency visakhapatnam", "music release and distribution company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-visakhapatnam",
  },
  openGraph: {
    title: "Music Release Agency in Visakhapatnam",
    description: "TML offers expert Music Release and Distribution services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Visakhapatnam" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Visakhapatnam",
    description: "TML offers expert Music Release and Distribution services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInVisakhapatnamPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
