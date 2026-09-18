"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { motion, useReducedMotion } from "motion/react";
import { MessageSquare, Mail } from "lucide-react";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="py-24">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* CTA card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-10 sm:p-16 text-center relative overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="mb-6 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]">
          <MessageSquare className="w-8 h-8" strokeWidth={1.5} />
        </div>
        
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nói chuyện với mình
        </h2>
        
        <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Muốn trao đổi về code, chia sẻ kinh nghiệm, hoặc góp ý cho mình? Cứ thoải mái liên hệ nhé.
        </p>
        
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-medium rounded-lg bg-[#111111] text-white hover:bg-[#333333] transition-transform active:scale-[0.98]"
        >
          <Mail className="w-5 h-5" />
          Gửi email
        </a>
        
        <p className="text-xs text-[var(--text-muted)] mt-6 font-mono tracking-wide">
          {profileData.email}
        </p>
      </motion.div>
    </section>
  );
}
