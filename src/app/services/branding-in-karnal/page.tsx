import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Branding Agency in Karnal",
  description: "TML offers expert Branding services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding karnal", "branding agency karnal", "branding company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-karnal",
  },
  openGraph: {
    title: "Branding Agency in Karnal",
    description: "TML offers expert Branding services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Karnal",
    description: "TML offers expert Branding services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
