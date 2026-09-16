"use client";

import React, { useEffect, useRef } from "react";

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

const nowItems = [
  {
    emoji: "💼",
    label: "Đang làm",
    text: "Thực tập Frontend tại LAZTAR — xây trang portfolio bằng Next.js",
  },
  {
    emoji: "📖",
    label: "Đang học",
    text: "React 19, App Router, TypeScript và Component Architecture",
  },
  {
    emoji: "🎯",
    label: "Mục tiêu tuần này",
    text: "Hoàn thành portfolio + nộp báo cáo PEEP Tuần 1",
  },
  {
    emoji: "☕",
    label: "Ngoài code",
    text: "Cà phê, nghe nhạc lofi và đọc một số sách.",
  },
];

export default function Now() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="now" className="py-16 opacity-0">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Section header */}
      <div className="mb-8">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
          Hiện tại
        </p>
        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Mình đang làm gì
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-2">
          Cập nhật gần nhất — Tháng 9, 2026
        </p>
      </div>

      {/* Now items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
        {nowItems.map((item) => (
          <div
            key={item.label}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 card-lift opacity-0 animate-fade-up"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
