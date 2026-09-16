"use client";

import React, { useEffect, useRef } from "react";
import { profileData } from "@/data/profile";

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

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="contact" className="py-16 opacity-0">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* CTA card */}
      <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-alt)] to-[var(--bg)] border border-[var(--border)] p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[var(--accent)]/5 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[var(--accent)]/5 blur-2xl" />

        <div className="relative z-10">
          <p className="text-4xl mb-5">💬</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nói chuyện với mình
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto mb-8 leading-relaxed">
            Muốn trao đổi về code, chia sẻ kinh nghiệm, hoặc góp ý cho mình?
            Cứ thoải mái gửi email nhé.
          </p>
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Gửi email cho mình
          </a>
          <p className="text-xs text-[var(--text-muted)] mt-5 font-mono tracking-wide">
            {profileData.email}
          </p>
        </div>
      </div>
    </section>
  );
}
