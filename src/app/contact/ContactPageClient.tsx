"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

const contactCards = [
  {
    label: "Edmonton Office",
    value: "11930 104 St NW, Edmonton, AB T5G 2K1",
    href: "https://maps.google.com/?q=11930+104+St+NW,+Edmonton,+AB+T5G+2K1,+Canada",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "India Office",
    value: "CO 112, Basement, Sector 34A, Chandigarh 160022",
    href: "https://maps.google.com/?q=Townmedialabs+Sector+34A+Chandigarh",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+1 (403) 604-8692",
    href: "tel:+14036048692",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "International",
    value: "+1 (403) 604-8692",
    href: "tel:+14036048692",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@townmedialabs.ca",
    href: "mailto:info@townmedialabs.ca",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const servicesOptions = [
  "Branding",
  "Graphic Design",
  "Packaging Design",
  "Google Ads",
  "SEO",
  "Lead Generation",
  "Website Development",
  "Social Media Marketing",
  "AI Influencer Management",
  "Video Editing",
  "Music Release",
  "Other",
];

const budgetOptions = [
  { value: "under-25k", label: "Under \u20b925,000" },
  { value: "25k-50k", label: "\u20b925,000 \u2013 \u20b950,000" },
  { value: "50k-1L", label: "\u20b950,000 \u2013 \u20b91,00,000" },
  { value: "1L-3L", label: "\u20b91,00,000 \u2013 \u20b93,00,000" },
  { value: "3L+", label: "\u20b93,00,000+" },
];

const faqs = [
  {
    question: "How do I get started with TML Agency?",
    answer:
      "Simply fill out our contact form or call us at +1 (403) 604-8692. We offer a free 30-minute consultation where we discuss your goals, challenges, and how our services can help your brand grow.",
  },
  {
    question: "What is TML Agency\u2019s typical response time?",
    answer:
      "We respond to all enquiries within 24 hours during business days. For urgent projects, call us directly and we\u2019ll prioritize your request.",
  },
  {
    question: "What services does TML Agency offer?",
    answer:
      "TML Agency offers a full suite of digital marketing services including branding, graphic design, packaging design, Google Ads, SEO, lead generation, website development, social media marketing, AI influencer management, video editing, and music release services.",
  },
  {
    question: "Does TML Agency work with clients outside Chandigarh?",
    answer:
      "Absolutely! We have offices in Edmonton, Canada and Chandigarh, India, and work with clients across North America, India, and internationally. We use video calls, project management tools, and regular updates to ensure seamless collaboration regardless of location.",
  },
];

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0a3e7c2c-92c9-42d5-a95e-466a482ec30a",
          subject: `New Contact Form Submission - ${formState.service || "General"}`,
          from_name: formState.name,
          ...formState,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = (field: string) =>
    `w-full bg-white/[0.04] border rounded-xl px-5 py-4 text-sm text-white placeholder:text-white focus:outline-none transition-all duration-300 ${
      focusedField === field
        ? "border-[#ff4500]/40 shadow-[0_0_20px_rgba(255,69,0,0.1)]"
        : "border-white/[0.08] hover:border-white/[0.12]"
    }`;

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      <div className="px-6 pt-24 md:pt-28 lg:px-12 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }]} />
      </div>

      {/* ── Hero ── */}
      <section className="relative w-full px-6 pt-12 pb-8 md:pt-16 md:pb-12 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] text-white tracking-[0.25em] uppercase mb-8"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Great Together
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-sm md:text-base text-white max-w-xl mx-auto"
          >
            Ready to elevate your brand? Get a free consultation with
            Chandigarh&apos;s leading digital marketing team. We respond within
            24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="relative w-full px-6 py-8 md:py-12 lg:px-12">
        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease }}
                className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#ff4500]/20 hover:shadow-[0_0_40px_rgba(255,69,0,0.08)] transition-all duration-500 text-center"
              >
                <div className="flex justify-center mb-4 text-white group-hover:text-[#ff4500] transition-colors duration-300">
                  {card.icon}
                </div>
                <p className="text-[10px] text-white tracking-[0.15em] uppercase mb-2">
                  {card.label}
                </p>
                <p className="text-sm text-white font-medium group-hover:text-white transition-colors">
                  {card.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Quick Info ── */}
      <section className="relative w-full px-6 py-12 md:py-20 lg:px-12 overflow-hidden">
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.02] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-3"
            >
              <h2 className="sr-only">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-[#ff4500]/10 border border-[#ff4500]/30 flex items-center justify-center mx-auto mb-6">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff4500"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-white mb-3">
                    Message sent!
                  </p>
                  <p className="text-sm text-white mb-8">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        budget: "",
                        message: "",
                      });
                    }}
                    className="text-sm text-[#ff4500] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs text-white tracking-wide mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        aria-required="true"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        className={inputClasses("name")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs text-white tracking-wide mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        aria-required="true"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@company.com"
                        className={inputClasses("email")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs text-white tracking-wide mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+1 (403) 604-8692"
                        className={inputClasses("phone")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs text-white tracking-wide mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        aria-required="true"
                        value={formState.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses("service")} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-[#111]">
                          Select a service
                        </option>
                        {servicesOptions.map((s) => (
                          <option key={s} value={s} className="bg-[#111]">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs text-white tracking-wide mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses("budget")} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#111]">
                        Select budget range
                      </option>
                      {budgetOptions.map((b) => (
                        <option key={b.value} value={b.value} className="bg-[#111]">
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs text-white tracking-wide mb-2"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      aria-required="true"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Describe your project, goals, and timeline..."
                      className={`${inputClasses("message")} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-5 py-3">
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={submitting ? {} : { scale: 1.02 }}
                    whileTap={submitting ? {} : { scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Quick Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="sr-only">Contact Details</h2>
              {/* Office Hours */}
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center text-[#ff4500]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white">
                    <span>Monday &ndash; Friday</span>
                    <span className="text-white">10:00 AM &ndash; 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM &ndash; 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time Promise */}
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center text-[#ff4500]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Quick Response
                  </h3>
                </div>
                <p className="text-sm text-white leading-relaxed">
                  We respond to every enquiry within{" "}
                  <span className="text-[#ff4500] font-semibold">
                    24 hours
                  </span>
                  . For urgent projects, call us directly and we&apos;ll
                  prioritize your request.
                </p>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Instagram", handle: "@townmedialabs", href: "https://www.instagram.com/townmedialabs/" },
                    { name: "LinkedIn", handle: "Townmedialabs", href: "https://in.linkedin.com/company/townmedialabs" },
                    { name: "Facebook", handle: "Town Media Labs", href: "https://www.facebook.com/Town.media.labs" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm text-white hover:text-white transition-colors group"
                    >
                      <span>{social.name}</span>
                      <span className="text-xs text-white group-hover:text-[#ff4500] transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-12"
          >
            <p className="text-[11px] text-white tracking-[0.25em] uppercase mb-4">
              Contact & Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                Contact Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm md:text-base font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center transition-all duration-300 ${
                      openFaq === i
                        ? "bg-[#ff4500]/10 border-[#ff4500]/30 text-[#ff4500] rotate-45"
                        : "text-white"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-white leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="relative w-full px-6 py-12 md:py-16 lg:px-12">
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-10"
          >
            <p className="text-[11px] text-white tracking-[0.25em] uppercase mb-4">
              Our Locations
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Find{" "}
              <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chandigarh Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="rounded-2xl border border-white/[0.06] overflow-hidden"
            >
              <div className="p-5 border-b border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white">Chandigarh Office</h3>
                <p className="text-sm text-white/60 mt-1">CO 112, Basement, Sector 34A, Chandigarh 160022</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.7558!3d30.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0abe888887%3A0x5c7a52e033e3a3a9!2sTownmedialabs!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TML Agency Chandigarh Office Location"
              />
            </motion.div>

            {/* Edmonton Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="rounded-2xl border border-white/[0.06] overflow-hidden"
            >
              <div className="p-5 border-b border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white">Edmonton Office</h3>
                <p className="text-sm text-white/60 mt-1">11930 104 St NW, Edmonton, AB T5G 2K1, Canada</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=11930+104+St+NW,+Edmonton,+AB+T5G+2K1,+Canada&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TML Agency Edmonton Office Location"
                className="rounded-b-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full px-6 py-16 md:py-20 lg:px-12">
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-[11px] text-white tracking-[0.25em] uppercase mb-4">
              Prefer to Talk?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Call us{" "}
              <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                directly
              </span>
            </h2>
            <p className="text-sm text-white mb-8 max-w-md mx-auto">
              Skip the form and speak with our team. We&apos;re available Monday
              through Saturday during business hours.
            </p>
            <motion.a
              href="tel:+14036048692"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-base hover:bg-[#ff5500] transition-colors shadow-[0_0_40px_rgba(255,69,0,0.3)]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +1 (403) 604-8692
            </motion.a>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
