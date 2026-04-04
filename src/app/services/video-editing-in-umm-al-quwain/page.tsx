import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert video editing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing umm al quwain", "video editing agency umm al quwain", "video editing company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-umm-al-quwain",
  },
  openGraph: {
    title: "Video Editing Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert video editing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Umm Al Quwain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert video editing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
