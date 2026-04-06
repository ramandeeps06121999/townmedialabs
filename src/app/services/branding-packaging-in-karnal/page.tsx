import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Karnal",
  description: "TML offers expert Branding and Packaging services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging karnal", "branding and packaging agency karnal", "branding and packaging company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-karnal",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Karnal",
    description: "TML offers expert Branding and Packaging services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Karnal",
    description: "TML offers expert Branding and Packaging services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
