import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Music Release Agency in Ghaziabad",
  description: "TML offers expert Music Release and Distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ghaziabad", "music release and distribution agency ghaziabad", "music release and distribution company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ghaziabad",
  },
  openGraph: {
    title: "Music Release Agency in Ghaziabad",
    description: "TML offers expert Music Release and Distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ghaziabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Ghaziabad",
    description: "TML offers expert Music Release and Distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInGhaziabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
