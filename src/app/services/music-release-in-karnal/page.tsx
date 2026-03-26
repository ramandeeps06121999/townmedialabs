import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Karnal | TML Agency",
  description: "TML offers expert music release and distribution services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution karnal", "music release and distribution agency karnal", "music release and distribution company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-karnal",
  },
  openGraph: {
    title: "Best Music Release Agency in Karnal | TML Agency",
    description: "TML offers expert music release and distribution services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Karnal | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Karnal | TML Agency",
    description: "TML offers expert music release and distribution services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
