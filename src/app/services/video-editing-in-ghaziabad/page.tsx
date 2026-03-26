import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Ghaziabad | TML Agency",
  description: "TML offers expert video editing services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ghaziabad", "video editing agency ghaziabad", "video editing company ghaziabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-ghaziabad",
  },
  openGraph: {
    title: "Best Video Editing Agency in Ghaziabad | TML Agency",
    description: "TML offers expert video editing services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-ghaziabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Ghaziabad | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Ghaziabad | TML Agency",
    description: "TML offers expert video editing services in Ghaziabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
