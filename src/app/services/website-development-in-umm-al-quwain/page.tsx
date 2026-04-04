import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Website Development Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert website development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development umm al quwain", "website development agency umm al quwain", "website development company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/website-development-in-umm-al-quwain",
  },
  openGraph: {
    title: "Website Development Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert website development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/website-development-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Umm Al Quwain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert website development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
