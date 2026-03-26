import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Glasgow | TML Agency",
  description: "TML offers expert video editing services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing glasgow", "video editing agency glasgow", "video editing company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-glasgow",
  },
  openGraph: {
    title: "Best Video Editing Agency in Glasgow | TML Agency",
    description: "TML offers expert video editing services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Glasgow | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Glasgow | TML Agency",
    description: "TML offers expert video editing services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
