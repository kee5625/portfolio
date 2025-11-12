"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { PROJECTS } from "@/app/data"

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Combined carousel: autoplay + spacing to show 3 items per view on large screens
export function ProjectsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {PROJECTS.map((project) => (
          // Use responsive basis classes so the carousel shows 1 on small, 2 on md, 3 on lg
          <CarouselItem
            key={project.id}
            className="pl-1 md:basis-1/2 lg:basis-1/2"
          >
            <div className="p-1">
              <Card className="overflow-hidden">
                {/* Project Image/Video Section */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    className="h-full w-full object-cover"
                    alt={project.name}
                    width={200}
                    height={100}
                  />
                </div>

                {/* Card Header with Title */}
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Card Content - can add more details here if needed */}
                <CardContent>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    View Project
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
