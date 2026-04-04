import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert video editing services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing visakhapatnam", "video editing agency visakhapatnam", "video editing company visakhapatnam"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-visakhapatnam",
  },
  openGraph: {
    title: "Video Editing Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert video editing services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-visakhapatnam",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Visakhapatnam | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Visakhapatnam | TML Agency",
    description: "TML offers expert video editing services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
