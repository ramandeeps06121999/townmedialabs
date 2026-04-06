import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Google Ads Agency in Karnal",
  description: "TML offers expert Google Ads management services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["Google Ads management karnal", "Google Ads management agency karnal", "Google Ads management company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/google-ads-in-karnal",
  },
  openGraph: {
    title: "Google Ads Agency in Karnal",
    description: "TML offers expert Google Ads management services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/google-ads-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Google Ads Agency in Karnal",
    description: "TML offers expert Google Ads management services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GoogleadsInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
