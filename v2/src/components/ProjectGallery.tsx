"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const PROJECTS = [
  {
    id: 1,
    title: "ivy",
    category: "AI Agents | Neural Networks",
    year: "2026",
    img: "/logo.jpg",
    link: "https://github.com/kee5625/ivy",
  },
  {
    id: 2,
    title: "the-search-thing",
    category: "Search / Information Retrieval",
    year: "2026",
    img: "/the-search-thing.png",
    link: "https://github.com/the-search-thing/the-search-thing",
  },
  {
    id: 3,
    title: "Gravitas",
    category: "Research | Knowledge Graph",
    year: "2025",
    img: "/gravitas.jpeg",
    link: "https://github.com/kee5625/gravitas.",
  },
  {
    id: 4,
    title: "Quartz",
    category: "AI Security & Privacy",
    year: "2025",
    img: "/quartz.png",
    link: "https://github.com/kee5625/Quartz/",
  },
  {
    id: 5,
    title: "FastQP",
    category: "Query Optimization | Database Systems",
    year: "2025",
    img: "/FastQP.jpg",
    link: "https://github.com/kee5625/QP_fast",
  },
  {
    id: 6,
    title: "Phisherman",
    category: "Cybersecurity",
    year: "2024",
    img: "/phisherman.png",
    link: "https://github.com/kee5625/Phisherman",
  },
  {
    id: 7,
    title: "OrpheusAI",
    category: "AI Healthcare | CNN Models",
    year: "2025",
    img: "/orpheusAI.jpg",
    link: "https://github.com/kee5625/OrpheusAI",
  },
];

export default function ProjectGallery() {
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient floating background glow
      gsap.to(".ambient-glow", {
        x: "30vw",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Simple scroll-triggered stagger entrance for the gallery items
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 75%",
          },
        },
      );
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={galleryRef}
      className="relative py-32 px-4 md:px-12 bg-bg overflow-hidden"
    >
      {/* Floating Purple Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center">
        <div className="ambient-glow absolute -left-[30%] w-[60vw] h-[60vw] rounded-full bg-[#7B2CBF] opacity-20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="block text-xs text-muted uppercase tracking-[0.3em] mb-4">
            SELECTED WORKS
          </span>
          <h2 className="text-5xl md:text-7xl font-display italic tracking-tight text-text">
            PROJECTS.
          </h2>
        </div>

        {/* Staggered Grid - Adjusted for horizontal images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-item group relative cursor-pointer block ${
                index % 2 !== 0 ? "md:mt-32" : ""
              }`}
            >
              {/* Image Container - Changed to aspect-video (16:9) */}
              <div className="relative aspect-video overflow-hidden rounded-sm bg-surface shadow-xl">
                {/* Purple Gradient border that shows on hover */}
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, #C77DFF 0%, #3C096C 100%) border-box",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                />

                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Project Details */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display text-text mb-1 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">{project.category}</p>
                </div>
                <span className="text-xs text-muted font-mono mt-1">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
