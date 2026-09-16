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
    url: "#",
    external: false,
    badge: "Đang xem",
    gradient: "linear-gradient(135deg, #C67B3C 0%, #D4956A 50%, #E8B88A 100%)",
    emoji: "🎨",
    date: "Tuần 1",
  },
  {
    title: "Báo Cáo PEEP Tuần 1",
    description:
      "Hệ thống báo cáo tiến độ học tập cá nhân tại LAZTAR. Dựng bằng Hugo, viết Markdown, đẩy lên GitHub tự động.",
    tech: ["Hugo", "Markdown", "Git"],
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
                          className={`text-sm text-[var(--text-muted)] transition-transform duration-300 ${
                            expandedId === project.title ? "rotate-180" : ""
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

            {/* Expanded Sub-items */}
            {project.subItems && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === project.title
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-12 pr-2 pb-2 space-y-3">
                  {project.subItems.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/sub flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-[0_4px_20px_-10px_var(--accent)] transition-all duration-300"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-[var(--text-muted)] mb-1">
                          {sub.date}
                        </span>
                        <span className="text-sm font-medium text-[var(--text)] group-hover/sub:text-[var(--accent)] transition-colors">
                          {sub.title}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[var(--accent)] opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all mt-2 sm:mt-0">
                        Xem báo cáo →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
