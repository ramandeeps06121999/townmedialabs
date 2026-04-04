import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Patiala | TML Agency",
  description: "TML offers expert video editing services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing patiala", "video editing agency patiala", "video editing company patiala"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-patiala",
  },
  openGraph: {
    title: "Video Editing Agency in Patiala | TML Agency",
    description: "TML offers expert video editing services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-patiala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Patiala | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Patiala | TML Agency",
    description: "TML offers expert video editing services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
