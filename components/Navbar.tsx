"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/profile";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="flex items-center justify-between py-4">
        {/* Logo / Name — serif with accent dot */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Thuận<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-7 text-[13px] text-[var(--text-secondary)]">
          {profileData.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[var(--text)] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--bg-alt)] transition-all"
          aria-label="Menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="16" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="pb-4 pt-2 flex flex-col gap-1">
          {profileData.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--bg-alt)] transition-all px-3 py-2 rounded-lg text-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
