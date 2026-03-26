import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Music Release Agency in Ahmedabad | TML Agency",
  description: "TML offers expert music release and distribution services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution ahmedabad", "music release and distribution agency ahmedabad", "music release and distribution company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-ahmedabad",
  },
  openGraph: {
    title: "Best Music Release Agency in Ahmedabad | TML Agency",
    description: "TML offers expert music release and distribution services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Ahmedabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Music Release Agency in Ahmedabad | TML Agency",
    description: "TML offers expert music release and distribution services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
