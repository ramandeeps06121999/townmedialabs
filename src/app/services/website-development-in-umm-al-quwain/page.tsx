import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Website Development Agency in Umm Al Quwain",
  description: "TML offers expert Website Development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development umm al quwain", "website development agency umm al quwain", "website development company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-umm-al-quwain",
  },
  openGraph: {
    title: "Website Development Agency in Umm Al Quwain",
    description: "TML offers expert Website Development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Umm Al Quwain",
    description: "TML offers expert Website Development services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
