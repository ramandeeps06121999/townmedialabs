import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Branding Agency in Derabassi",
  description: "TML offers expert Branding services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding derabassi", "branding agency derabassi", "branding company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-derabassi",
  },
  openGraph: {
    title: "Branding Agency in Derabassi",
    description: "TML offers expert Branding services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Derabassi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Derabassi",
    description: "TML offers expert Branding services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDerabassiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
