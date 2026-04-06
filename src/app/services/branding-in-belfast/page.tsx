import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Branding Agency in Belfast",
  description: "TML offers expert Branding services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding belfast", "branding agency belfast", "branding company belfast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-belfast",
  },
  openGraph: {
    title: "Branding Agency in Belfast",
    description: "TML offers expert Branding services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-belfast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Belfast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Belfast",
    description: "TML offers expert Branding services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBelfastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
