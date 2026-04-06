import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Music Release Agency in Karnal",
  description: "TML offers expert Music Release and Distribution services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution karnal", "music release and distribution agency karnal", "music release and distribution company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-karnal",
  },
  openGraph: {
    title: "Music Release Agency in Karnal",
    description: "TML offers expert Music Release and Distribution services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Karnal",
    description: "TML offers expert Music Release and Distribution services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
