import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Branding Agency in Umm Al Quwain",
  description: "TML offers expert Branding services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding umm al quwain", "branding agency umm al quwain", "branding company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-umm-al-quwain",
  },
  openGraph: {
    title: "Branding Agency in Umm Al Quwain",
    description: "TML offers expert Branding services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Umm Al Quwain",
    description: "TML offers expert Branding services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
