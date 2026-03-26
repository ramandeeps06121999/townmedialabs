import type { Metadata } from "next";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "TML Agency privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      <article className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-3xl prose-invert">
          <p className="text-[10px] text-white/30 tracking-[0.25em] uppercase mb-6">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">
            Privacy Policy<span className="text-[#ff4500]">.</span>
          </h1>
          <p className="text-sm text-white/90 mb-12">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-sm text-white/90 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you use our website or contact us, we may collect personal
                information such as your name, email address, phone number,
                company name, and the details you provide through our contact or
                newsletter forms.
              </p>
              <p className="mt-3">
                We also automatically collect certain technical data including
                your IP address, browser type, device information, and browsing
                behaviour through cookies and analytics tools (Google Analytics,
                Microsoft Clarity).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your enquiries and provide our services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To analyse website traffic and usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Cookies & Analytics
              </h2>
              <p>
                We use Google Analytics and Microsoft Clarity to understand how
                visitors interact with our website. These tools may use cookies
                to collect anonymous usage data. You can manage cookie
                preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Data Sharing
              </h2>
              <p>
                We do not sell or rent your personal information. We may share
                data with trusted third-party service providers (email services,
                analytics platforms) who assist us in operating our business,
                subject to confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal information against unauthorised access,
                alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                data. You may also withdraw consent for marketing communications
                at any time. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:info@townmedialabs.com"
                  className="text-[#ff4500] hover:underline"
                >
                  info@townmedialabs.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please
                contact us at{" "}
                <a
                  href="mailto:info@townmedialabs.com"
                  className="text-[#ff4500] hover:underline"
                >
                  info@townmedialabs.com
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
