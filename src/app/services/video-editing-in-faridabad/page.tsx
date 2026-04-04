import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Faridabad | TML Agency",
  description: "TML offers expert video editing services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing faridabad", "video editing agency faridabad", "video editing company faridabad"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-faridabad",
  },
  openGraph: {
    title: "Video Editing Agency in Faridabad | TML Agency",
    description: "TML offers expert video editing services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-faridabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Faridabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Faridabad | TML Agency",
    description: "TML offers expert video editing services in Faridabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
