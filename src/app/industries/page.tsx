import type { Metadata } from "next";
import IndustriesIndexClient from "./IndustriesIndexClient";

export const metadata: Metadata = {
  title: "Industries We Serve | TML Agency — Digital Marketing by Industry",
  description:
    "Explore TML Agency's industry-specific digital marketing solutions. We help dentists, plumbers, electricians, salons, cafes, accountants, veterinarians, non-profits, and more grow with tailored strategies.",
  keywords: [
    "industry specific marketing",
    "digital marketing by industry",
    "marketing for small businesses",
    "niche marketing agency",
    "TML Agency industries",
  ],
  openGraph: {
    title: "Industries We Serve | TML Agency",
    description:
      "Industry-specific digital marketing solutions tailored to your business. From dentists to non-profits, we build strategies that drive growth.",
    url: "https://townmedialabs.com/industries",
    siteName: "TML Agency",
    type: "website",
  },
  alternates: {
    canonical: "https://townmedialabs.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesIndexClient />;
}
