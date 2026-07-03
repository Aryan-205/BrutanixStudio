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
  "w-full rounded-xl border border-neutral-200 bg-neutral-50/30 px-4.5 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 hover:border-neutral-350 hover:bg-white focus:border-[#5210F8] focus:bg-white focus:shadow-[0_0_0_4px_rgba(82,16,248,0.08)] tracking-tight";

const labelClassName =
  "text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 select-none";

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
      className="group flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4.5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/10"
      whileHover={reduce ? undefined : { x: 4 }}
      transition={{ duration: 0.3, ease: easePremium }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-lavender transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105">
        <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
          {label}
        </p>
        <div className="mt-1 text-sm font-semibold leading-relaxed text-white/90 tracking-tight">
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
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12 md:pb-28 relative">
      {/* Dynamic background highlights */}
      <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-brand-lavender/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute left-[-5%] top-1/4 h-80 w-80 rounded-full bg-brand-purple/[0.02] blur-[100px] pointer-events-none" />

      <Reveal delay={0.1}>
        <motion.div
          className="overflow-hidden rounded-[2.5rem] border border-neutral-200/50 bg-white shadow-[0_24px_64px_-16px_rgba(82,16,248,0.06)]"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          transition={{ duration: 0.9, ease: easePremium }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Info panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-purple via-[#390bc5] to-brand-navy p-8 md:p-12 lg:col-span-5 lg:min-h-[660px]">
              {/* Noise and mesh overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,125,253,0.15),transparent_50%)] pointer-events-none" />
              <div className="pointer-events-none absolute -right-16 -top-10 opacity-[0.05]">
                <div className="scale-125 grayscale">
                  <BrandLogo />
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C47DFD]">
                  Get in touch
                </span>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl leading-snug">
                  Let's build something great together
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65 tracking-tight font-medium">
                  Whether you have an upcoming project or want to explore a
                  strategic partnership, our team is ready to help you grow.
                </p>

                <StaggerChildren
                  className="mt-10 flex flex-col gap-4"
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

              <div className="relative z-10 mt-12 lg:mt-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Connect with us
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {socialLinks.map(({ label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4.5 py-2.5 text-xs font-bold text-white/80 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white tracking-tight"
                      whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
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
              className="flex flex-col gap-5 p-8 md:gap-6 md:p-12 lg:col-span-7 justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <h4 className="text-xl font-bold tracking-tight text-neutral-900">
                  Send us a message
                </h4>
                <p className="mt-1.5 text-sm text-neutral-500 tracking-tight">
                  Fill in the details below and we'll get back to you shortly.
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
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(82,16,248,0.25)] transition-all duration-300 hover:bg-[#4210d0] hover:shadow-[0_12px_32px_rgba(82,16,248,0.35)] tracking-tight cursor-pointer"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          scale: 1.01,
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
