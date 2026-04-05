const DEFAULT_PROVIDER = {
  "@type": "Organization" as const,
  name: "TML Agency",
  url: "https://townmedialabs.ca",
  telephone: "+14036048692",
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "11930 104 St NW",
    addressLocality: "Edmonton",
    addressRegion: "Alberta",
    addressCountry: "CA",
    postalCode: "T5G 2K1",
  },
  sameAs: [
    "https://www.instagram.com/tmlagency/",
    "https://www.facebook.com/tmlagency/",
    "https://www.linkedin.com/company/tmlagency/",
    "https://twitter.com/tmlagency",
  ],
};

export function generateServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    provider: DEFAULT_PROVIDER,
    ...(params.areaServed && {
      areaServed: {
        "@type": "City",
        name: params.areaServed,
      },
    }),
    ...(params.category && { category: params.category }),
  };
}

export function generateLocalBusinessSchema(params: {
  name: string;
  description: string;
  url: string;
  city: string;
  state: string;
  services: string[];
  country?: string;
  areaServed?: { type: "City" | "Country" | "State"; name: string }[];
  coordinates?: { latitude: number; longitude: number };
}) {
  // Default to Edmonton HQ if no coordinates provided
  const coords = params.coordinates || {
    latitude: 53.5461,
    longitude: -113.4937,
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: params.name,
    description: params.description,
    url: params.url,
    telephone: DEFAULT_PROVIDER.telephone,
    address: DEFAULT_PROVIDER.address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: String(coords.latitude),
      longitude: String(coords.longitude),
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    areaServed: params.areaServed
      ? params.areaServed.map((area) => ({
          "@type": area.type,
          name: area.name,
        }))
      : {
          "@type": "City",
          name: params.city,
        },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: params.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(params: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  keywords?: string[];
  category?: string;
  authorName?: string;
  authorId?: string;
}) {
  const siteUrl = "https://townmedialabs.ca";

  // Create author object - use Person if authorName/ID provided, otherwise Organization
  const author = params.authorName && params.authorId
    ? {
        "@type": "Person",
        name: params.authorName,
        url: `${siteUrl}/authors/${params.authorId}`,
      }
    : {
        "@type": "Organization",
        name: "TML Agency",
        url: siteUrl,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    image: `${siteUrl}${params.image || "/og-image.png"}`,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author,
    publisher: {
      "@type": "Organization",
      name: "TML Agency",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${params.slug}`,
    },
    ...(params.keywords && { keywords: params.keywords.join(", ") }),
    ...(params.category && { articleSection: params.category }),
    inLanguage: "en-CA",
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewSchema(reviews: { author: string; rating: number; text: string; date?: string }[]) {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = totalRating / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: DEFAULT_PROVIDER.name,
    url: DEFAULT_PROVIDER.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      ...(r.date && { datePublished: r.date }),
    })),
  };
}
