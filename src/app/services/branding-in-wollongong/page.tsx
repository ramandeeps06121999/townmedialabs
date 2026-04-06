import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["wollongong"];

export const metadata: Metadata = {
  title: "Branding Agency in Wollongong",
  description: "TML offers expert Branding services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding wollongong", "branding agency wollongong", "branding company wollongong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-wollongong",
  },
  openGraph: {
    title: "Branding Agency in Wollongong",
    description: "TML offers expert Branding services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-wollongong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Wollongong",
    description: "TML offers expert Branding services in Wollongong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInWollongongPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
