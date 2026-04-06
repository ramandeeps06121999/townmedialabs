import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dunedin"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Dunedin",
  description: "TML offers expert Social Media Marketing services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["social media marketing dunedin", "social media marketing agency dunedin", "social media marketing dunedin nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-dunedin",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Dunedin",
    description: "TML offers expert Social Media Marketing services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-dunedin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Dunedin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Dunedin",
    description: "TML offers expert Social Media Marketing services in Dunedin, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaMarketingInDunedinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
