import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { ServicePageSchema } from "@/components/schema/ServicePageSchema";

const data = servicePages["content-marketing"];
const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.metaKeywords,
  alternates: {
    canonical: `/services/${data.slug}`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `${siteUrl}/services/${data.slug}`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${data.title} Services - TML Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: data.metaTitle,
    description: data.metaDescription,
    images: ["/og-image.png"],
  },
};

export default function ContentMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
