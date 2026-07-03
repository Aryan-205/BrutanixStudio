"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium, viewportDefault } from "@/components/motion/presets";

const inputClassName =
  "w-full rounded-2xl border border-neutral-200/70 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 hover:bg-white focus:border-[#5210F8] focus:bg-white focus:shadow-[0_0_0_4px_rgba(82,16,248,0.1)] tracking-[-0.02em]";

const labelClassName =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500";

const serviceOptions = [
  "Brand Strategy & Positioning",
  "Website Design & Development",
  "SEO & Digital Visibility",
  "Social Media & Content Marketing",
  "AI-Powered Content & Video",
  "CRM & Funnel Automation",
  "Lead Generation & Outreach",
  "GTM, Events & Paid Growth",
  "General Inquiry",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

function InfoItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
      whileHover={reduce ? undefined : { x: 4 }}
      transition={{ duration: 0.3, ease: easePremium }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C47DFD] transition-colors group-hover:bg-white/15">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
          {label}
        </p>
        <div className="mt-1 text-sm font-medium leading-relaxed text-white/90 tracking-[-0.02em]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function SelectField({
  id,
  name,
  label,
  options,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          className={`${inputClassName} appearance-none cursor-pointer pr-10`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
          strokeWidth={1.75}
        />
      </div>
    </div>
  );
}

export default function ContactFormSection() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12 md:pb-28">
      <Reveal delay={0.1}>
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white shadow-[0_32px_80px_-16px_rgba(82,16,248,0.12)]"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          transition={{ duration: 0.9, ease: easePremium }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Info panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-linear-to-br from-[#5210F8] via-[#4012c4] to-[#072C55] p-8 md:p-10 lg:col-span-5 lg:min-h-[640px]">
              <div className="pointer-events-none absolute -right-16 -top-10 opacity-[0.07]">
                <div className="scale-125 grayscale">
                  <BrandLogo />
                </div>
              </div>

              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C47DFD]">
                  Get in touch
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">
                  Let&apos;s build something great together
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65 tracking-[-0.02em]">
                  Whether you have an upcoming project or want to explore a
                  partnership, our team is ready to help you grow.
                </p>

                <StaggerChildren
                  className="mt-8 flex flex-col gap-3"
                  staggerDelay={0.08}
                >
                  <InfoItem icon={Mail} label="Our Email">
                    <a
                      href="mailto:info@invisiedge.com"
                      className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                    >
                      info@invisiedge.com
                    </a>
                  </InfoItem>
                  <InfoItem icon={MapPin} label="Headquarters">
                    San Francisco, CA — 2 Embarcadero Center, 8th floor, 94111
                  </InfoItem>
                </StaggerChildren>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Connect with us
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map(({ label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white tracking-[-0.02em]"
                      whileHover={reduce ? undefined : { scale: 1.04, y: -1 }}
                      whileTap={reduce ? undefined : { scale: 0.97 }}
                      transition={{ duration: 0.25, ease: easePremium }}
                    >
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form panel */}
            <form
              className="flex flex-col gap-5 p-8 md:gap-6 md:p-10 lg:col-span-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <h4 className="text-lg font-semibold tracking-[-0.03em] text-neutral-900">
                  Send us a message
                </h4>
                <p className="mt-1 text-sm text-neutral-500 tracking-[-0.02em]">
                  Fill in the details below and we&apos;ll get back to you shortly.
                </p>
              </div>

              <StaggerChildren className="flex flex-col gap-5 md:gap-6" staggerDelay={0.06}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={labelClassName}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className={inputClassName}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className={labelClassName}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClassName}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className={inputClassName}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className={labelClassName}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="website" className={labelClassName}>
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://yourcompany.com"
                    className={inputClassName}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
                  <SelectField
                    id="service"
                    name="service"
                    label="Service Needed"
                    options={serviceOptions}
                    placeholder="Select a service"
                    required
                  />
                  <SelectField
                    id="budget"
                    name="budget"
                    label="Project Budget"
                    options={budgetOptions}
                    placeholder="Select a budget range"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={labelClassName}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    className={`${inputClassName} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5210F8] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(82,16,248,0.35)] transition-colors duration-300 hover:bg-[#4210d0] tracking-[-0.02em]"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          scale: 1.01,
                          boxShadow: "0 16px 40px rgba(82,16,248,0.42)",
                        }
                  }
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.3, ease: easePremium }}
                >
                  Send Message
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </motion.button>
              </StaggerChildren>
            </form>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
