"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ResumeShowcase() {
  const showcaseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating ambient background glow
      gsap.to(".ambient-glow-resume", {
        x: "-10vw",
        y: "-5vh",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".showcase-reveal",
        { opacity: 0, y: 40, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top 80%",
          },
        },
      );
    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={showcaseRef} className="relative py-32 px-4 md:px-12 bg-bg overflow-hidden">
      {/* 
        Fixed Floating Purple Ambient Background 
        Using a radial-gradient to ensure perfectly soft, feathered edges (no blobs!)
      */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-end">
        <div 
          className="ambient-glow-resume absolute -right-[20%] w-[80vw] h-[80vw] opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(123, 44, 191, 0.4) 0%, rgba(60, 9, 108, 0.1) 40%, rgba(10, 10, 10, 0) 70%)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-24">
        {/* Left: The "Painting" Frame */}
        <div className="showcase-reveal relative w-full lg:w-2/3 shrink-0">
          {/* Outer Frame */}
          <div className="p-4 md:p-8 bg-surface border border-stroke rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Inner Matte */}
            <div className="p-2 md:p-4 bg-bg border border-stroke/50">
              {/* PDF Viewer - Using object to embed native PDF */}
              <div className="relative w-full aspect-[8.5/11] bg-white overflow-hidden">
                <object
                  data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  type="application/pdf"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Fallback if browser doesn't support inline PDFs */}
                  <div className="flex flex-col items-center justify-center h-full bg-surface text-center p-8">
                    <p className="text-muted mb-4">PDF viewer not available.</p>
                    <a href="/resume.pdf" className="text-accent underline">
                      Download PDF instead
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Museum Plaque & Controls */}
        <div className="showcase-reveal w-full lg:w-1/3 flex flex-col items-start pb-8">
          <span className="block text-xs text-muted uppercase tracking-[0.3em] mb-4">
            CURRICULUM VITAE
          </span>
          <h2 className="text-4xl md:text-5xl font-display italic tracking-tight text-text mb-8">
            The Blueprint.
          </h2>

          {/* Museum Plaque */}
          <div className="bg-surface border border-stroke p-6 w-full max-w-sm mb-10 shadow-lg relative">
            {/* Pin detailing */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-stroke/80" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-stroke/80" />

            <h3 className="text-lg font-display text-text">
              Karthik Rachamolla
            </h3>
            <p className="text-sm text-muted italic mt-1 mb-4">
              Software Developer
            </p>
            <div className="text-xs text-muted/80 space-y-1 font-mono">
              <p>MEDIUM: Portable Document Format</p>
              <p>DIMENSIONS: 8.5&quot; &times; 11&quot;</p>
              <p>LOCATION: Digital Archive</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="relative group">
            {/* Purple Gradient border */}
            <span
              className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              style={{
                inset: "-2px",
                background: "linear-gradient(90deg, #C77DFF 0%, #3C096C 100%)",
              }}
            />
            <a
              href="/resume.pdf"
              download
              className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 bg-bg text-text text-sm rounded-full border-2 border-stroke transition-all duration-200 group-hover:scale-105 group-hover:bg-surface"
            >
              Download PDF
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Anchor for "Reach out" CTA — sits at the bottom of the resume section */}
      <div id="contact" />
    </section>
  );
}
