"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Zap, Palette, FileText, Code, ChevronDown, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LAZTAR Corporate Landing Page",
    description: "Giao diện landing page doanh nghiệp giới thiệu giải pháp số và năng lực công nghệ LAZTAR. Xây dựng bằng Next.js, React, Tailwind CSS và kiến trúc Double-Bezel.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    url: "https://laztar-landing-page-thuan.vercel.app/",
    external: true,
    badge: "Ngày 2",
    icon: Zap,
    date: "Tuần 1",
  },
  {
    title: "Trang Portfolio Cá Nhân",
    description: "Trang web bạn đang xem đây - xây bằng Next.js 16, React 19 và Tailwind CSS. Đây là bài tập Ngày 3 trong quá trình học tại LAZTAR của mình.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    url: "https://github.com/lehoangthuan4568/laztar-portfolio",
    external: true,
    badge: "Đang xem",
    icon: Palette,
    date: "Tuần 1",
  },
  {
    title: "Báo Cáo PEEP Tuần 1",
    description: "Nơi mình báo cáo tiến độ học tập cá nhân tại LAZTAR.",
    tech: ["Markdown", "Static Gen", "Hugo"],
    url: "#",
    external: false,
    badge: "3 Bài báo cáo",
    icon: FileText,
    date: "Tuần 1",
    subItems: [
      {
        title: "Ngày 1: Git Handbook & Team Collaboration",
        url: "https://lehoangthuan4568.github.io/LAZTAR-PEEP-2026-Thuan/week-01/day-01/",
        date: "Ngày 1",
      },
      {
        title: "Ngày 2: LAZTAR Landing Page & React Fundamentals",
        url: "https://lehoangthuan4568.github.io/LAZTAR-PEEP-2026-Thuan/week-01/day-02/",
        date: "Ngày 2",
      },
      {
        title: "Ngày 3: Trang Portfolio Cá Nhân Next.js & Deploy Vercel",
        url: "https://lehoangthuan4568.github.io/LAZTAR-PEEP-2026-Thuan/week-01/day-03/",
        date: "Ngày 3",
      },
    ],
  },
  {
    title: "Các dự án cá nhân",
    description: "Mình có làm một số dự án cá nhân trước đây. Các dự án này là nơi mình học cách xây dựng các ứng dụng web với React, Next.js và các công nghệ khác.",
    tech: ["React", "TypeScript", "CSS Grid"],
    url: "https://github.com/lehoangthuan4568",
    external: true,
    badge: null,
    icon: Code,
    date: "Đang tiếp tục",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const toggleExpand = (e: React.MouseEvent<HTMLAnchorElement>, project: typeof projects[0]) => {
    if (project.subItems) {
      e.preventDefault();
      setExpandedId(expandedId === project.title ? null : project.title);
    }
  };

  return (
    <section id="projects" className="py-24">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Section header */}
      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
          Dự án
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Những thứ mình đã làm
        </h2>
        <p className="text-base text-[var(--text-secondary)] mt-3">
          Dưới đây là các dự án mình đã hoàn thành trong kỳ thực tập.
        </p>
      </div>

      {/* Project cards */}
      <div className="grid gap-6">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative card-lift"
            >
              <a
                href={project.url}
                onClick={(e) => toggleExpand(e, project as any)}
                {...(project.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden cursor-pointer"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="p-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Date + Badge */}
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                          {project.date}
                        </p>
                        {project.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] font-medium">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="flex items-center justify-between font-semibold text-[var(--text)] transition-colors text-lg sm:text-xl font-sans tracking-tight">
                        <span className="flex items-center gap-2">
                          {project.title}
                          {project.external && !project.subItems && (
                            <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--text-muted)]" />
                          )}
                        </span>
                        {project.subItems && (
                          <ChevronDown
                            className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 ${
                              expandedId === project.title ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] font-mono transition-colors group-hover:bg-[var(--border)] group-hover:text-[var(--text)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Expanded Sub-items (Timeline style) */}
              {project.subItems && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedId === project.title
                      ? "max-h-[800px] opacity-100 mt-2 mb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative pt-2 pb-3">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-10 sm:left-12 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />

                    <div className="space-y-4 pl-16 sm:pl-20 pr-3 sm:pr-6">
                      {project.subItems.map((sub, idx) => (
                        <div key={idx} className="relative">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[24.5px] sm:-left-[32.5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--bg)] ring-4 ring-[var(--card)] border border-[var(--text-muted)] z-10 group-hover/sub:bg-[var(--text)] group-hover/sub:border-[var(--text)] transition-all duration-300" />

                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/sub flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--text-muted)] transition-all duration-300 active:scale-[0.99]"
                          >
                            <div className="flex flex-col">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-1.5">
                                {sub.date}
                              </span>
                              <span
                                className="text-base sm:text-lg font-medium text-[var(--text)] transition-colors tracking-tight"
                              >
                                {sub.title}
                              </span>
                            </div>

                            {/* Animated Arrow/Button */}
                            <div className="mt-3 sm:mt-0 flex items-center gap-3">
                              <span className="text-xs font-mono font-medium text-[var(--text-muted)] group-hover/sub:text-[var(--text)] transition-colors opacity-0 sm:opacity-100 -translate-x-4 sm:translate-x-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                                Đọc bài
                              </span>
                              <div className="w-8 h-8 rounded-lg border border-[var(--border)] group-hover/sub:border-[var(--text)] flex items-center justify-center bg-[var(--card)] text-[var(--text-muted)] group-hover/sub:text-[var(--text)] transition-all duration-300">
                                <ExternalLink className="w-3.5 h-3.5 group-hover/sub:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
