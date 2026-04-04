import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Derabassi | TML Agency",
  description: "TML offers expert video editing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing derabassi", "video editing agency derabassi", "video editing company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-derabassi",
  },
  openGraph: {
    title: "Video Editing Agency in Derabassi | TML Agency",
    description: "TML offers expert video editing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Derabassi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Derabassi | TML Agency",
    description: "TML offers expert video editing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
