'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const PROJECTS = [
  {
    id: 1,
    title: 'Aura Sync',
    category: 'Creative Direction',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop', // Abstract dark wave
  },
  {
    id: 2,
    title: 'Nova Core',
    category: 'Fullstack Platform',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop', // Dark tech/abstract
  },
  {
    id: 3,
    title: 'Echo UI',
    category: 'Design Systems',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1600&auto=format&fit=crop', // Dark gradient art
  },
  {
    id: 4,
    title: 'Prism',
    category: 'Web3 Identity',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop', // Abstract 3D shape
  },
]

export default function ProjectGallery() {
  const galleryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple scroll-triggered stagger entrance for the gallery items
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 75%',
          },
        }
      )
    }, galleryRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={galleryRef} className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20 text-center md:text-left">
        <span className="block text-xs text-muted uppercase tracking-[0.3em] mb-4">
          SELECTED WORKS
        </span>
        <h2 className="text-5xl md:text-7xl font-display italic tracking-tight text-text">
          Gallery.
        </h2>
      </div>

      {/* Staggered Grid - Adjusted for horizontal images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className={`gallery-item group relative cursor-pointer ${
              index % 2 !== 0 ? 'md:mt-32' : '' // Increased stagger offset for horizontal images
            }`}
          >
            {/* Image Container - Changed to aspect-video (16:9) */}
            <div className="relative aspect-video overflow-hidden rounded-sm bg-surface shadow-xl">
              {/* Gradient border that shows on hover */}
              <div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                }}
              />
              
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              <span className="text-xs text-muted font-mono mt-1">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
