import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact TML Agency | Get a Free Consultation | Chandigarh",
  description:
    "Get in touch with TML Agency, Chandigarh's leading digital marketing agency. Free consultation for branding, SEO, Google Ads, social media & web development.",
  keywords: [
    "contact tml",
    "digital marketing consultation",
    "chandigarh agency contact",
    "free marketing consultation",
    "digital marketing agency contact",
  ],
  openGraph: {
    title: "Contact TML Agency | Get a Free Consultation | Chandigarh",
    description:
      "Get in touch with TML Agency, Chandigarh's leading digital marketing agency. Free consultation for branding, SEO, Google Ads, social media & web development.",
    type: "website",
    url: "https://townmedialabs.com/contact",
    siteName: "TML Agency",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact TML Agency - Get a Free Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Contact TML Agency | Get a Free Consultation | Chandigarh",
    description:
      "Get in touch with TML Agency, Chandigarh's leading digital marketing agency. Free consultation for branding, SEO, Google Ads, social media & web development.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TML Agency",
  description:
    "Get in touch with TML Agency, Chandigarh's leading digital marketing agency. Free consultation for branding, SEO, Google Ads, social media & web development.",
  url: "https://townmedialabs.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "TML Agency",
    url: "https://townmedialabs.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98726-48209",
      email: "info@townmedialabs.com",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://townmedialabs.com/#business",
  name: "TML Agency",
  description:
    "Chandigarh's leading digital marketing agency specializing in branding, SEO, Google Ads, social media marketing & web development.",
  url: "https://townmedialabs.com",
  telephone: "+91-98726-48209",
  email: "info@townmedialabs.com",
  image: "https://townmedialabs.com/og-image.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CO 112, Basement, Sector 34A",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160022",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7281",
    longitude: "76.7726",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
    "https://www.facebook.com/Town.media.labs",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started with TML Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply fill out our contact form or call us at +91 98726 48209. We offer a free 30-minute consultation where we discuss your goals, challenges, and how our services can help your brand grow.",
      },
    },
    {
      "@type": "Question",
      name: "What is TML Agency's typical response time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We respond to all enquiries within 24 hours during business days. For urgent projects, call us directly and we'll prioritize your request.",
      },
    },
    {
      "@type": "Question",
      name: "What services does TML Agency offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TML Agency offers a full suite of digital marketing services including branding, graphic design, packaging design, Google Ads, SEO, lead generation, website development, social media marketing, AI influencer management, video editing, and music release services.",
      },
    },
    {
      "@type": "Question",
      name: "Does TML Agency work with clients outside Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! While our office is based in Chandigarh, we work with clients across India and internationally. We use video calls, project management tools, and regular updates to ensure seamless collaboration regardless of location.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <ContactPageClient />
    </>
  );
}
