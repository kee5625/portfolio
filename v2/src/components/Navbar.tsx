"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
];

function scrollTo(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, id: string) => {
    setActive(label);
    scrollTo(id);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pointer-events-none">
      <nav
        className={`
          pointer-events-auto inline-flex items-center gap-0.5
          rounded-full border border-white/10 bg-surface/80
          backdrop-blur-md px-2 py-2
          transition-shadow duration-300
          ${scrolled ? "shadow-md shadow-black/30" : ""}
        `}
      >
        {/* Logo ring — scrolls to top */}
        <LogoButton onClick={() => handleNav("Home", "home")} />

        <Divider />

        {/* Nav links */}
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={label}
            onClick={() => handleNav(label, id)}
            className={`
              text-xs sm:text-sm rounded-full
              px-3 sm:px-4 py-1.5 sm:py-2
              transition-colors duration-200
              ${
                active === label
                  ? "text-text bg-stroke/50"
                  : "text-muted hover:text-text hover:bg-stroke/50"
              }
            `}
          >
            {label}
          </button>
        ))}

        <Divider />

        {/* "Say hi ↗" */}
        <SayHiButton />
      </nav>
    </div>
  );
}

/* ─── Logo ─── */
function LogoButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className="relative flex-shrink-0 w-9 h-9 rounded-full p-[2px] transition-all duration-300"
      style={{
        background: hovered
          ? "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)"
          : "linear-gradient(90deg,  #89AACC 0%, #4E85BF 100%)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
    >
      <div
        className="w-full h-full rounded-full bg-bg flex items-center justify-center transition-transform duration-200"
        style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
      >
        <span className="text-[13px] font-display italic tracking-tighter text-text select-none">
          KR
        </span>
      </div>
    </button>
  );
}

/* ─── "Say hi" button ─── */
function SayHiButton() {
  
  return (
    <div className="relative group">
      <span
        className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          inset: "-2px",
          background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
        }}
      />
      <button
        onClick={() => scrollTo("resume")}
        className="relative z-10 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted group-hover:text-text transition-colors duration-200 bg-surface backdrop-blur-md">
        Say hi ↗
      </button>
    </div>
  );
}

/* ─── Thin vertical divider ─── */
function Divider() {
  return (
    <div className="flex-shrink-0 w-px h-5 bg-stroke mx-1 hidden sm:block" />
  );
}
