"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium, viewportDefault } from "@/components/motion/presets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inputClassName =
  "w-full rounded-xl border border-neutral-200 bg-white px-4.5 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-[color,background-color,border-color,box-shadow] duration-200 hover:border-neutral-300 focus:border-brand-purple focus:shadow-[0_0_0_4px_rgba(82,16,248,0.08)] tracking-tight";

const labelClassName =
  "text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400 select-none";

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
  return (
    <div className="flex gap-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-brand-purple">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          {label}
        </p>
        <div className="mt-1 text-sm font-medium leading-relaxed text-neutral-800 tracking-tight">
          {children}
        </div>
      </div>
    </div>
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
      <Select name={name} required={required}>
        <SelectTrigger id={id} aria-label={label}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default function ContactFormSection() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12 md:pb-28">
      <Reveal delay={0.1}>
        <motion.div
          className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_20px_50px_-28px_rgba(0,0,0,0.14)]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportDefault}
          transition={{ duration: 0.6, ease: easePremium }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Info panel */}
            <div className="flex flex-col justify-between border-b border-neutral-200 bg-neutral-50/60 p-8 md:p-10 lg:col-span-5 lg:min-h-[600px] lg:border-b-0 lg:border-r">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple">
                  Get in touch
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-neutral-900 md:text-3xl">
                  Let&apos;s build something great together
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
                  Whether you have an upcoming project or want to explore a
                  strategic partnership, our team is ready to help you grow.
                </p>

                <div className="mt-10 flex flex-col gap-5">
                  <InfoItem icon={Mail} label="Our Email">
                    <a
                      href="mailto:info@invisiedge.com"
                      className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple/50"
                    >
                      info@invisiedge.com
                    </a>
                  </InfoItem>
                  <InfoItem icon={MapPin} label="Headquarters">
                    San Francisco, CA — 2 Embarcadero Center, 8th floor, 94111
                  </InfoItem>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Connect with us
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {socialLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-neutral-500 underline-offset-4 transition-colors hover:text-brand-purple hover:underline"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form panel */}
            <form
              className="flex flex-col justify-center gap-5 p-8 md:gap-6 md:p-10 lg:col-span-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <h4 className="text-xl font-semibold tracking-tight text-neutral-900">
                  Send us a message
                </h4>
                <p className="mt-1.5 text-sm text-neutral-500 tracking-tight">
                  Fill in the details below and we&apos;ll get back to you shortly.
                </p>
              </div>

              <StaggerChildren
                className="flex flex-col gap-5 md:gap-6"
                staggerDelay={0.06}
              >
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
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#4210d0] cursor-pointer"
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.16, ease: easePremium }}
                >
                  Send Message
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
