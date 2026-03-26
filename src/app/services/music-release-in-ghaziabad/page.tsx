import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ghaziabad | TML Agency",
  description: "TML offers expert music release and distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ghaziabad", "music release and distribution agency ghaziabad", "music release and distribution company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ghaziabad",
  },
  openGraph: {
    title: "Best Music Release Agency in Ghaziabad | TML Agency",
    description: "TML offers expert music release and distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ghaziabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Ghaziabad | TML Agency",
    description: "TML offers expert music release and distribution services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
