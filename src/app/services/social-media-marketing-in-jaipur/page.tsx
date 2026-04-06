import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Jaipur",
  description: "TML offers expert Social Media Marketing services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing jaipur", "social media marketing agency jaipur", "social media marketing company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-jaipur",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Jaipur",
    description: "TML offers expert Social Media Marketing services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Jaipur",
    description: "TML offers expert Social Media Marketing services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
