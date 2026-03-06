"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow animation (slow pulse)
      gsap.to(".ambient-glow-contact", {
        scale: 1.1,
        opacity: 0.5,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Staggered reveal for contact elements
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Replace this with your actual Web3Forms Access Key
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-4 md:px-12 bg-bg overflow-hidden min-h-screen flex items-center"
    >
      {/* Deep Purple Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div
          className="ambient-glow-contact absolute w-[150vw] h-[150vw] opacity-30 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(123, 44, 191, 0.12) 0%, rgba(60, 9, 108, 0.05) 30%, rgba(10, 10, 10, 0) 60%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Massive Section Header */}
        <div className="mb-20 text-center contact-reveal">
          <span className="block text-xs text-muted uppercase tracking-[0.3em] mb-6">
            INITIATE SEQUENCE
          </span>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-display italic tracking-tight text-text leading-none">
            Let&apos;s Talk.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: The Form */}
          <div className="lg:col-span-7 contact-reveal">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form Row: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="block text-xs text-muted uppercase tracking-widest mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-stroke pb-3 text-text focus:outline-none focus:border-[#C77DFF] transition-colors peer"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-xs text-muted uppercase tracking-widest mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-stroke pb-3 text-text focus:outline-none focus:border-[#C77DFF] transition-colors peer"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Form Row: Message */}
              <div className="relative group">
                <label
                  htmlFor="message"
                  className="block text-xs text-muted uppercase tracking-widest mb-2"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-stroke pb-3 text-text focus:outline-none focus:border-[#C77DFF] transition-colors resize-none peer"
                  placeholder="Please write your message..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="relative group inline-block"
                >
                  <span
                    className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      inset: "-2px",
                      background:
                        "linear-gradient(90deg, #C77DFF 0%, #3C096C 100%)",
                    }}
                  />
                  <div className="relative z-10 px-8 py-4 bg-bg text-text text-sm uppercase tracking-widest rounded-full border border-stroke transition-all duration-300 group-hover:bg-surface group-hover:scale-105 disabled:opacity-50 disabled:group-hover:scale-100">
                    {formStatus === "submitting"
                      ? "Transmitting..."
                      : "Send Message"}
                  </div>
                </button>

                {formStatus === "success" && (
                  <span className="text-sm text-[#C77DFF] animate-fade-in">
                    Message received.
                  </span>
                )}
                {formStatus === "error" && (
                  <span className="text-sm text-red-500 animate-fade-in">
                    Error sending. Try email.
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between contact-reveal">
            <div className="bg-surface/50 p-8 border border-stroke rounded-xl backdrop-blur-md h-full flex flex-col justify-center space-y-12">
              {/* Email */}
              <div>
                <span className="block text-xs text-muted uppercase tracking-widest mb-2">
                  Direct Email
                </span>
                <a
                  href="mailto:hello@karthik.dev"
                  className="text-2xl md:text-3xl font-display text-text hover:text-[#C77DFF] transition-colors"
                >
                  rachamka@mail.uc.edu
                </a>
              </div>

              {/* Phone */}
              <div>
                <span className="block text-xs text-muted uppercase tracking-widest mb-2">
                  Phone
                </span>
                <a
                  href="tel:+15550000000"
                  className="text-2xl md:text-3xl font-display text-text hover:text-[#C77DFF] transition-colors"
                >
                  +1 (917) 728-7669
                </a>
              </div>

              {/* Socials Grid */}
              <div>
                <span className="block text-xs text-muted uppercase tracking-widest mb-4">
                  Digital Presence
                </span>
                <div className="flex gap-6 items-center">
                  <a
                    href="https://github.com/kee5625"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={28}
                      height={28}
                      className="invert"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/karthikeya-rachamolla"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={28}
                      height={28}
                      className=""
                    />
                  </a>
                  <a
                    href="https://twitter.com/rachamka"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Image
                      src="/X.svg"
                      alt="X"
                      width={28}
                      height={28}
                      className="invert"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
