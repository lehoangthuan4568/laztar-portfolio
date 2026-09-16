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

type SkillLevel = 1 | 2 | 3 | 4 | 5;

interface SkillItem {
  name: string;
  level: SkillLevel;
}

const skillGroups: {
  title: string;
  emoji: string;
  subtitle: string;
  items: SkillItem[];
}[] = [
  {
    title: "Đang dùng hàng ngày",
    emoji: "⚡",
    subtitle: "Core stack",
    items: [
      { name: "React 19", level: 4 },
      { name: "Next.js 16", level: 3 },
      { name: "Tailwind CSS", level: 5 },
      { name: "TypeScript", level: 3 },
      { name: "Git & GitHub", level: 4 },
    ],
  },
  {
    title: "Nền tảng vững",
    emoji: "🧱",
    subtitle: "Fundamentals",
    items: [
      { name: "HTML5 & CSS3", level: 5 },
      { name: "JavaScript ES6+", level: 4 },
      { name: "Responsive Design", level: 4 },
      { name: "Chrome DevTools", level: 3 },
    ],
  },
  {
    title: "Đang học thêm",
    emoji: "🌱",
    subtitle: "Growing",
    items: [
      { name: "Hugo SSG", level: 2 },
      { name: "Component Architecture", level: 3 },
      { name: "Web Accessibility", level: 2 },
      { name: "Clean Code", level: 3 },
    ],
  },
];

function SkillDots({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`skill-dot ${
            i < level ? "skill-dot-filled" : "skill-dot-empty"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="skills" className="py-16 opacity-0">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Section header */}
      <div className="mb-10">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
          Kỹ năng
        </p>
        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Công cụ trong tay
        </h2>
      </div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 stagger">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="card-lift rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 opacity-0 animate-fade-up"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-1">
              <span className="text-xl">{group.emoji}</span>
              <div>
                <h3 className="font-semibold text-sm text-[var(--text)]">
                  {group.title}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  {group.subtitle}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--border)] my-3" />

            {/* Skills with dots */}
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-2 text-sm"
                >
                  <span className="text-[var(--text-secondary)]">
                    {item.name}
                  </span>
                  <SkillDots level={item.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
