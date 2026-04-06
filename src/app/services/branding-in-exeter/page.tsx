import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Branding Agency in Exeter",
  description: "TML offers expert Branding services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding exeter", "branding agency exeter", "branding company exeter"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-exeter",
  },
  openGraph: {
    title: "Branding Agency in Exeter",
    description: "TML offers expert Branding services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Exeter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Exeter",
    description: "TML offers expert Branding services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInExeterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
