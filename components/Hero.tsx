"use client";

import React, { useEffect, useRef, useState } from "react";
import { profileData } from "@/data/profile";

function useTypewriter(text: string, speed = 60, delay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-fade-up");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Hero() {
  const sectionRef = useScrollReveal();
  const greeting = "Xin chào, mình là Thuận 👋";
  const { displayed, done } = useTypewriter(greeting, 50, 500);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-16 sm:pt-24 pb-16 opacity-0"
    >
      {/* Typewriter greeting */}
      <div className="mb-8">
        <p className="text-xl sm:text-2xl font-medium text-[var(--text)]">
          {displayed}
          {!done && <span className="typewriter-cursor" />}
        </p>
      </div>

      {/* Name — big serif with gradient */}
      <div className="mb-6">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="gradient-text">{profileData.name}</span>
        </h1>
        <div className="flex items-center gap-3 mt-3">
          {/* Status dot — pulsing green */}
          <div className="relative flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot" />
          </div>
          <p className="text-[var(--accent)] font-medium text-sm sm:text-base">
            Software Engineer Trainee @ LAZTAR
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl">
        <p>
          Mình đang là Software Engineer Trainee tại{" "}
          <strong className="text-[var(--text)] font-medium">LAZTAR</strong> —
          nơi mình học cách làm việc chuyên nghiệp. Công cụ chính
          của mình là{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--accent-light)] text-[var(--accent)] text-sm font-medium">
            React
          </span>{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--accent-light)] text-[var(--accent)] text-sm font-medium">
            Next.js
          </span>{" "}
          và{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--accent-light)] text-[var(--accent)] text-sm font-medium">
            Tailwind CSS
          </span>
        </p>
        <p>
          Mình đang được học và phát triển bản thân về nhiều mảng.
          Mỗi tuần mình ghi lại quá trình học qua{" "}
          <a
            href={profileData.peepReportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] underline underline-offset-4 decoration-[var(--accent)]/30 hover:decoration-[var(--accent)] font-medium transition-all"
          >
            báo cáo PEEP
          </a>
          .
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-8">
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/85 transition-all shadow-sm hover:shadow-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-light)] transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email
        </a>
        <a
          href={profileData.peepReportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-light)] transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Báo cáo PEEP
        </a>
      </div>
    </section>
  );
}
