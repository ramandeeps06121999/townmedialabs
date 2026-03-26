import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Phoenix | TML Agency",
  description: "TML offers expert video editing services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing phoenix", "video editing agency phoenix", "video editing company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-phoenix",
  },
  openGraph: {
    title: "Best Video Editing Agency in Phoenix | TML Agency",
    description: "TML offers expert video editing services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Phoenix | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Phoenix | TML Agency",
    description: "TML offers expert video editing services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInPhoenixPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
