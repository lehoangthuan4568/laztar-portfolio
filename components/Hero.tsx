"use client";

import React, { useEffect, useState } from "react";
import { profileData } from "@/data/profile";
import { motion } from "motion/react";
import { Mail, FileText } from "lucide-react";

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

export default function Hero() {
  const greeting = "Xin chào, mình là Thuận 👋";
  const { displayed, done } = useTypewriter(greeting, 50, 500);

  return (
    <motion.section
      id="about"
      className="pt-24 pb-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Typewriter greeting */}
      <div className="mb-6">
        <p className="text-xl sm:text-2xl font-medium text-[var(--text)]">
          {displayed}
          {!done && <span className="typewriter-cursor" />}
        </p>
      </div>

      {/* Name — big serif, tighter tracking for editorial feel */}
      <div className="mb-8">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-[var(--text)]">{profileData.name}</span>
        </h1>
        <div className="flex items-center gap-3 mt-5">
          <div className="relative flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot" />
          </div>
          <p className="text-[var(--text-secondary)] font-medium text-xs sm:text-sm font-mono uppercase tracking-widest">
            Software Engineer Trainee @ LAZTAR
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mt-8">
        <p>
          Mình đang là Software Engineer Trainee tại{" "}
          <strong className="text-[var(--text)] font-semibold">LAZTAR</strong> —
          nơi mình rèn luyện kỹ năng và phong cách làm việc. Công cụ chính của mình là{" "}
          <span className="font-mono text-sm px-1.5 py-0.5 bg-[var(--card)] border border-[var(--border)] rounded">React</span>,{" "}
          <span className="font-mono text-sm px-1.5 py-0.5 bg-[var(--card)] border border-[var(--border)] rounded">Next.js</span> và{" "}
          <span className="font-mono text-sm px-1.5 py-0.5 bg-[var(--card)] border border-[var(--border)] rounded">Tailwind CSS</span>.
        </p>
        <p>
          Mỗi tuần mình ghi lại quá trình học và thử nghiệm thông qua{" "}
          <a
            href={profileData.peepReportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] hover:text-[var(--accent)] underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)] font-medium transition-colors"
          >
            báo cáo PEEP
          </a>
          .
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center gap-4 mt-12">
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium rounded-lg bg-[#111111] text-white hover:bg-[#333333] transition-transform active:scale-[0.98]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[#111111] hover:bg-[var(--card)] transition-all active:scale-[0.98]"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
        <a
          href={profileData.peepReportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[#111111] hover:bg-[var(--card)] transition-all active:scale-[0.98]"
        >
          <FileText className="w-4 h-4" />
          Báo cáo PEEP
        </a>
      </div>
    </motion.section>
  );
}
