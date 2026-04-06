import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Music Release Agency in Hyderabad",
  description: "TML offers expert Music Release and Distribution services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution hyderabad", "music release and distribution agency hyderabad", "music release and distribution company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-hyderabad",
  },
  openGraph: {
    title: "Music Release Agency in Hyderabad",
    description: "TML offers expert Music Release and Distribution services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Hyderabad",
    description: "TML offers expert Music Release and Distribution services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInHyderabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
