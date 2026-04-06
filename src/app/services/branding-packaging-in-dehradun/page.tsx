import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Dehradun",
  description: "TML offers expert Branding and Packaging services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging dehradun", "branding and packaging agency dehradun", "branding and packaging company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-dehradun",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Dehradun",
    description: "TML offers expert Branding and Packaging services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Dehradun" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Dehradun",
    description: "TML offers expert Branding and Packaging services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInDehradunPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
