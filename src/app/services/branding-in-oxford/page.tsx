import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Branding Agency in Oxford",
  description: "TML offers expert Branding services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding oxford", "branding agency oxford", "branding company oxford"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-oxford",
  },
  openGraph: {
    title: "Branding Agency in Oxford",
    description: "TML offers expert Branding services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-oxford",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Oxford" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Oxford",
    description: "TML offers expert Branding services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInOxfordPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
