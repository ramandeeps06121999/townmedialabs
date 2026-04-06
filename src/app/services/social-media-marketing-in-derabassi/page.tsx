import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Derabassi",
  description: "TML offers expert Social Media Marketing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing derabassi", "social media marketing agency derabassi", "social media marketing company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-derabassi",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Derabassi",
    description: "TML offers expert Social Media Marketing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Derabassi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Derabassi",
    description: "TML offers expert Social Media Marketing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInDerabassiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
