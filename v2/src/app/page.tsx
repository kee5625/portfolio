"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AppWrapper from "@/components/AppWrapper";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import ResumeShowcase from "@/components/ResumeShowcase";
import ContactSection from "@/components/ContactsSection";

export default function Home() {
  // Register ScrollTrigger globally for the page
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <AppWrapper>
      <main className="bg-bg relative">
        <Hero />
        {/* We use an ID here if the navbar needs to anchor to it */}
        <div id="projects">
          <ProjectGallery />
        </div>
        <div id="resume">
          <ResumeShowcase />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </AppWrapper>
  );
}
