"use client";

import React, { useEffect, useRef, useState } from "react";
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

const projects = [
  {
    title: "Trang Portfolio Cá Nhân",
    description:
      "Trang web bạn đang xem đây — xây bằng Next.js 16, React 19 và Tailwind CSS. Đây là bài tập trong quá trình học tại LAZTAR của mình",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    url: "https://github.com/lehoangthuan4568/laztar-portfolio",
    external: true,
    badge: "Đang xem",
    gradient: "linear-gradient(135deg, #C67B3C 0%, #D4956A 50%, #E8B88A 100%)",
    emoji: "🎨",
    date: "Tuần 1",
  },
  {
    title: "Báo Cáo PEEP Tuần 1",
    description:
      "Nơi mình báo cáo tiến độ học tập cá nhân tại LAZTAR.",
    tech: ["anything", "other things", "and more!"],
    url: "#",
    external: false,
    badge: "2 Bài báo cáo",
    gradient: "linear-gradient(135deg, #5B8C5A 0%, #7DB47C 50%, #A5D6A4 100%)",
    emoji: "📝",
    date: "Tuần 1",
    subItems: [
      {
        title: "Ngày 1: Git Handbook & Team Collaboration",
        url: "https://lehoangthuan4568.github.io/LAZTAR-PEEP-2026-Thuan/week-01/day-01/",
        date: "Ngày 1",
      },
      {
        title: "Ngày 2: Portfolio Next.js & Deploy Vercel",
        url: "https://lehoangthuan4568.github.io/LAZTAR-PEEP-2026-Thuan/week-01/day-02/",
        date: "Ngày 2",
      },
    ],
  },
  {
    title: "Các dự án cá nhân",
    description:
      "Mình có làm một số dự án cá nhân trước đây. Các dự án này là nơi mình học cách xây dựng các ứng dụng web với React, Next.js và các công nghệ khác.",
    tech: ["React", "TypeScript", "CSS Grid"],
    url: "https://github.com/lehoangthuan4568",
    external: true,
    badge: null,
    gradient: "linear-gradient(135deg, #6366F1 0%, #818CF8 50%, #A5B4FC 100%)",
    emoji: "⚙️",
    date: "Đang tiếp tục",
  },
];

export default function Projects() {
  const sectionRef = useScrollReveal();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (e: React.MouseEvent<HTMLAnchorElement>, project: typeof projects[0]) => {
    if (project.subItems) {
      e.preventDefault();
      setExpandedId(expandedId === project.title ? null : project.title);
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-16 opacity-0">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Section header */}
      <div className="mb-10">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
          Dự án
        </p>
        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Những thứ mình đã làm
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-2">
          Dưới đây là các dự án mình đã hoàn thành trong kỳ thực tập.
        </p>
      </div>

      {/* Project cards with gradient preview */}
      <div className="space-y-5 stagger">
        {projects.map((project) => (
          <div key={project.title} className="relative opacity-0 animate-fade-up card-lift">
            <a
              href={project.url}
              onClick={(e) => toggleExpand(e, project)}
              {...(project.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden cursor-pointer"
            >
              {/* Gradient preview bar */}
              <div
                className="h-2 group-hover:h-3 transition-all duration-300"
                style={{ background: project.gradient }}
              />

              {/* Card content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  {/* Emoji */}
                  <span className="text-2xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Date + Badge */}
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        {project.date}
                      </p>
                      {project.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="flex items-center justify-between font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors text-base sm:text-lg">
                      <span className="flex items-center">
                        {project.title}
                        {project.external && !project.subItems && (
                          <span className="inline-block ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            →
                          </span>
                        )}
                      </span>
                      {project.subItems && (
                        <span
                          className={`text-sm text-[var(--text-muted)] transition-transform duration-300 ${expandedId === project.title ? "rotate-180" : ""
                            }`}
                        >
                          ▼
                        </span>
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)] font-mono transition-colors group-hover:bg-[var(--accent-light)] group-hover:text-[var(--accent)]"
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
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === project.title
                  ? "max-h-[800px] opacity-100 mt-2 mb-2"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <div className="relative pt-2 pb-3">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-7 sm:left-10 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />

                  <div className="space-y-4 pl-14 sm:pl-20 pr-3 sm:pr-6">
                    {project.subItems.map((sub, idx) => (
                      <div key={idx} className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[32.5px] sm:-left-[44.5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--background)] ring-[6px] ring-[var(--card)] border-[1.5px] border-[var(--accent)] z-10 group-hover/sub:bg-[var(--accent)] group-hover/sub:scale-125 group-hover/sub:shadow-[0_0_12px_var(--accent)] transition-all duration-300" />

                        <a
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/sub flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)]/40 hover:shadow-[0_8px_30px_-12px_var(--accent)] transition-all duration-300"
                        >
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-1.5 opacity-80">
                              {sub.date}
                            </span>
                            <span
                              className="text-base sm:text-lg font-semibold text-[var(--text)] group-hover/sub:text-[var(--accent)] transition-colors"
                              style={{ fontFamily: "var(--font-playfair)" }}
                            >
                              {sub.title}
                            </span>
                          </div>

                          {/* Animated Arrow/Button */}
                          <div className="mt-3 sm:mt-0 flex items-center gap-3">
                            <span className="text-xs font-mono font-medium text-[var(--text-muted)] group-hover/sub:text-[var(--accent)] transition-colors opacity-0 sm:opacity-100 -translate-x-4 sm:translate-x-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0">Đọc bài</span>
                            <div className="w-8 h-8 rounded-full border border-[var(--border)] group-hover/sub:border-[var(--accent)] flex items-center justify-center bg-[var(--card)] group-hover/sub:bg-[var(--accent)] text-[var(--text-muted)] group-hover/sub:text-white transition-all duration-300">
                              <svg className="w-3.5 h-3.5 transform -rotate-45 group-hover/sub:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
