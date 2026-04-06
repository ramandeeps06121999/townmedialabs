import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Music Release Agency in Derabassi",
  description: "TML offers expert Music Release and Distribution services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["music release and distribution derabassi", "music release and distribution agency derabassi", "music release and distribution company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-derabassi",
  },
  openGraph: {
    title: "Music Release Agency in Derabassi",
    description: "TML offers expert Music Release and Distribution services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/music-release-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release Agency in Derabassi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Music Release Agency in Derabassi",
    description: "TML offers expert Music Release and Distribution services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function MusicreleaseInDerabassiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release"
    />
  );
}
