"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Briefcase, BookOpen, Target, Coffee } from "lucide-react";

const nowItems = [
  {
    icon: Briefcase,
    label: "Đang làm",
    text: "Thực tập Frontend tại LAZTAR - xây trang portfolio bằng Next.js",
  },
  {
    icon: BookOpen,
    label: "Đang học",
    text: "React 19, App Router, TypeScript và Component Architecture",
  },
  {
    icon: Target,
    label: "Mục tiêu tuần này",
    text: "Hoàn thành portfolio + nộp báo cáo PEEP Tuần 1",
  },
  {
    icon: Coffee,
    label: "Ngoài code",
    text: "Cà phê, nghe nhạc lofi và đọc một số sách.",
  },
];

export default function Now() {
  const reduce = useReducedMotion();

  return (
    <section id="now" className="py-24">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Section header */}
      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
          Hiện tại
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Mình đang làm gì
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-3">
          Cập nhật gần nhất — Tháng 9, 2026
        </p>
      </div>

      {/* Now items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {nowItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 card-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] shrink-0 group-hover:text-[var(--text)] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] font-semibold mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-base text-[var(--text)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
