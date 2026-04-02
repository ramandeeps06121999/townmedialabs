import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import type { ServicePageData } from "@/data/servicePages";

interface ServicePageSchemaProps {
  data: ServicePageData;
}

export function ServicePageSchema({ data }: ServicePageSchemaProps) {
  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.description,
    url: `https://townmedialabs.com/services/${data.slug}`,
    category: data.title,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Services", url: "https://townmedialabs.com/services" },
    { name: data.title, url: `https://townmedialabs.com/services/${data.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    data.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
