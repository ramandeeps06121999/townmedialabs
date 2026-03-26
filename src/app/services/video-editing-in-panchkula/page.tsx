import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Panchkula | TML Agency",
  description: "TML offers expert video editing services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing panchkula", "video editing agency panchkula", "video editing company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-panchkula",
  },
  openGraph: {
    title: "Best Video Editing Agency in Panchkula | TML Agency",
    description: "TML offers expert video editing services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Panchkula | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Panchkula | TML Agency",
    description: "TML offers expert video editing services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
