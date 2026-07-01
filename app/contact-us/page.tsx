"use client";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export default function ContactUsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip bg-[#F9F9F9] shadow-[0_20px_50px_rgba(0,0,0,0.15)] pb-16 rounded-b-3xl">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        {/* Contact Page Hero */}
        <section className="px-6 pt-32 pb-10 text-center max-w-4xl mx-auto md:pt-40 md:pb-12 font-sans">
          <span className="rounded-full bg-linear-to-tr from-[#646161] via-[#000000] to-[#646161] px-4 py-1.5 text-sm font-medium text-white w-fit mx-auto inline-block">
            Let's Collaborate
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Ready to Accelerate? <br />
            Let’s Book a Call.
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below to share details about your project or query, and our strategy team will reach back within 24 hours.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            
            {/* Info Side (Span 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                  Whether you have an upcoming project, want to explore a design partnership, or simply want to chat, we would love to hear from you.
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
                      Our Email
                    </h5>
                    <a
                      href="mailto:info@invisiedge.com"
                      className="text-base font-bold text-neutral-800 hover:text-black transition-colors underline"
                    >
                      info@invisiedge.com
                    </a>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
                      Headquarters
                    </h5>
                    <p className="text-sm font-medium text-neutral-700 leading-relaxed max-w-xs">
                      San Francisco, CA 2 Embarcadero Center, 8 floor, 94111
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <h5 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                  Connect With Us
                </h5>
                <div className="flex gap-4 text-sm text-neutral-600 font-medium">
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline">Dribbble</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline">LinkedIn</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline">Instagram</a>
                </div>
              </div>
            </div>

            {/* Form Side (Span 7 cols) */}
            <form className="lg:col-span-7 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-neutral-200 focus:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-800 outline-hidden transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-neutral-200 focus:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-800 outline-hidden transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project-type" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  What services are you looking for?
                </label>
                <select
                  id="project-type"
                  className="w-full bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-neutral-200 focus:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-800 outline-hidden transition-all appearance-none cursor-pointer"
                >
                  <option>Brand Design & Asset Acceleration</option>
                  <option>Webflow / Next.js Development</option>
                  <option>Creative Strategy & Consulting</option>
                  <option>AI Transformation Workflows</option>
                  <option>General Inquiry / Say Hello</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us a little bit about your brand, timeline, and goals..."
                  required
                  className="w-full bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border border-neutral-200 focus:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-800 outline-hidden transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-center rounded-xl bg-linear-to-b from-[#8932ff] to-[#9873ff] hover:from-[#7b21f7] hover:to-[#8a62f8] px-6 py-4 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer mt-2"
              >
                Schedule Introduction Call
              </button>
            </form>

          </div>
        </section>
      </div>
    </MotionProvider>
  );
}
