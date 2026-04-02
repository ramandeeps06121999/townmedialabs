import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { ServicePageSchema } from "@/components/schema/ServicePageSchema";

const data = servicePages["gmb-listing"];

export const metadata: Metadata = {
  title: `${data.title} Services | TML Agency`,
  description: data.description,
};

export default function GmbListingPage() {
  return <ServicePageTemplate data={data} />;
}
