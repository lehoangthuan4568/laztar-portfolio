import React from "react";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-4 py-10">
      <div className="section-divider mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        <p>
          © {new Date().getFullYear()} {profileData.name} — Made with ☕ tại LAZTAR
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.peepReportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            PEEP Report
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-[var(--accent)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
