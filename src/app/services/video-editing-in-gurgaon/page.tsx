import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Gurgaon | TML Agency",
  description: "TML offers expert video editing services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing gurgaon", "video editing agency gurgaon", "video editing company gurgaon"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-gurgaon",
  },
  openGraph: {
    title: "Best Video Editing Agency in Gurgaon | TML Agency",
    description: "TML offers expert video editing services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-gurgaon",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Gurgaon | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Gurgaon | TML Agency",
    description: "TML offers expert video editing services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
