import type { Metadata } from "next";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "TML Agency terms of service. Read about the terms and conditions governing the use of our website and services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      <article className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-3xl prose-invert">
          <p className="text-[10px] text-white tracking-[0.25em] uppercase mb-6">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">
            Terms of Service<span className="text-[#ff4500]">.</span>
          </h1>
          <p className="text-sm text-white mb-12">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-sm text-white leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the TML Agency website (townmedialabs.ca), you
                accept and agree to be bound by these Terms of Service. If you
                do not agree with any part of these terms, please do not use our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Services
              </h2>
              <p>
                TML Agency provides digital marketing, branding, web
                development, and related services. The specific deliverables,
                timelines, and pricing for any project are agreed upon separately
                through individual service agreements or proposals.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                images, and software — is the property of TML Agency and is
                protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. User Conduct
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Use the website for any unlawful purpose</li>
                <li>
                  Attempt to gain unauthorised access to any part of the website
                </li>
                <li>
                  Submit false, misleading, or spam content through our forms
                </li>
                <li>
                  Interfere with or disrupt the website&apos;s functionality
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                TML Agency provides this website on an &ldquo;as is&rdquo;
                basis. We make no warranties, expressed or implied, regarding the
                accuracy, reliability, or availability of the website. TML
                Agency shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or privacy practices of these
                external sites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Modifications
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this page.
                Continued use of the website constitutes acceptance of the
                updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising from these terms
                shall be subject to the exclusive jurisdiction of the courts in
                Chandigarh.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Contact
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a
                  href="mailto:info@townmedialabs.ca"
                  className="text-[#ff4500] hover:underline"
                >
                  info@townmedialabs.ca
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>

      <FooterHome2 />
    </main>
  );
}
