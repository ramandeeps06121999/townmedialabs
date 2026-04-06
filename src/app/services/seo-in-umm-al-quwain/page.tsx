import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "SEO Agency in Umm Al Quwain",
  description: "TML offers expert SEO services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo umm al quwain", "seo agency umm al quwain", "seo company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/seo-in-umm-al-quwain",
  },
  openGraph: {
    title: "SEO Agency in Umm Al Quwain",
    description: "TML offers expert SEO services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/seo-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Umm Al Quwain",
    description: "TML offers expert SEO services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
