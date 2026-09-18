"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Zap, Layers, Sprout } from "lucide-react";

type SkillLevel = 1 | 2 | 3 | 4 | 5;

interface SkillItem {
  name: string;
  level: SkillLevel;
}

const skillGroups = [
  {
    title: "Đang dùng hàng ngày",
    icon: Zap,
    subtitle: "Core stack",
    items: [
      { name: "React 19", level: 4 as SkillLevel },
      { name: "Next.js 16", level: 3 as SkillLevel },
      { name: "Tailwind CSS", level: 5 as SkillLevel },
      { name: "TypeScript", level: 3 as SkillLevel },
      { name: "Git & GitHub", level: 4 as SkillLevel },
    ],
  },
  {
    title: "Nền tảng vững",
    icon: Layers,
    subtitle: "Fundamentals",
    items: [
      { name: "HTML5 & CSS3", level: 5 as SkillLevel },
      { name: "JavaScript ES6+", level: 4 as SkillLevel },
      { name: "Responsive Design", level: 4 as SkillLevel },
      { name: "Chrome DevTools", level: 3 as SkillLevel },
    ],
  },
  {
    title: "Đang học thêm",
    icon: Sprout,
    subtitle: "Growing",
    items: [
      { name: "Hugo SSG", level: 2 as SkillLevel },
      { name: "Component Architecture", level: 3 as SkillLevel },
      { name: "Web Accessibility", level: 2 as SkillLevel },
      { name: "Clean Code", level: 3 as SkillLevel },
    ],
  },
];

function SkillDots({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            i < level ? "bg-[var(--text)]" : "bg-[var(--border)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-24">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Section header */}
      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
          Kỹ năng
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Công cụ trong tay
        </h2>
      </div>

      {/* Skill cards - Bento style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 card-lift flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-base text-[var(--text)] tracking-tight">
                    {group.title}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mt-0.5">
                    {group.subtitle}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--border)] mb-5" />

              {/* Skills with dots */}
              <ul className="space-y-4 flex-1">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-[var(--text-secondary)] font-medium">
                      {item.name}
                    </span>
                    <SkillDots level={item.level} />
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
