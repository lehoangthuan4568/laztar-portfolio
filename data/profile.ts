export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; icon: string }[];
}

export const profileData = {
  name: "Lê Hoàng Thuận",
  title: "Frontend Developer & Web Enthusiast",
  subtitle: "Thực tập sinh Lập trình Web tại LAZTAR",
  bio: "Đam mê xây dựng các giao diện web hiện đại, chuẩn UI/UX, tối ưu hiệu năng và trải nghiệm người dùng với hệ sinh thái React và Next.js.",
  status: "Sẵn sàng cho dự án mới",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "lehoangthuan4568@gmail.com",
  github: "https://github.com/lehoangthuan4568",
  peepReportUrl: "https://lehoangthuan4568.github.io/LAZTAR-PEEP-2026-Thuan/",
  resumeUrl: "#contact",

  stats: [
    { label: "Tiến độ học tập", value: "100%", detail: "Hoàn thành đúng hạn" },
    { label: "Dự án thực tế", value: "3+", detail: "React, Next.js & Hugo" },
    { label: "Công nghệ chính", value: "5+", detail: "React 19, Next 16, TS, TW" },
    { label: "Thời gian code", value: "30h+/tuần", detail: "Rèn luyện chuyên sâu" }
  ],

  skillCategories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React 19", level: "Thực hành", icon: "react" },
        { name: "Next.js 16 (App Router)", level: "Thực hành", icon: "nextjs" },
        { name: "TypeScript", level: "Cơ bản / Nâng cao", icon: "typescript" },
        { name: "Tailwind CSS v4", level: "Thành thạo", icon: "tailwind" },
        { name: "HTML5 & Modern CSS3", level: "Vững chắc", icon: "html" },
        { name: "JavaScript (ES6+)", level: "Vững chắc", icon: "javascript" }
      ]
    },
    {
      title: "Công cụ & Môi trường",
      skills: [
        { name: "Git & GitHub", level: "Quản lý nhánh / Pull Request", icon: "git" },
        { name: "VS Code & Antigravity IDE", level: "Môi trường chính", icon: "vscode" },
        { name: "pnpm / npm", level: "Quản lý gói", icon: "terminal" },
        { name: "Chrome DevTools", level: "Debug & Responsive test", icon: "browser" },
        { name: "Hugo Static Site", level: "Báo cáo PEEP Tuần 1", icon: "hugo" }
      ]
    },
    {
      title: "Tư duy & UI/UX Design",
      skills: [
        { name: "Mobile First & Responsive", level: "Chuẩn mọi thiết bị", icon: "mobile" },
        { name: "Bento Grid Architecture", level: "Xu hướng hiện đại", icon: "grid" },
        { name: "Web Accessibility (A11y)", level: "Tương phản & Phím", icon: "check" },
        { name: "Clean Code & Component-based", level: "Tái sử dụng cao", icon: "code" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "portfolio-nextjs",
      title: "Trang Cá Nhân Hiện Đại (Portfolio)",
      description:
        "Trang portfolio cá nhân xây dựng bằng Next.js 16 (App Router), React 19 và Tailwind CSS. Thiết kế theo phong cách Bento Grid hiện đại, Dark Mode sang trọng, đạt chuẩn Responsive và tối ưu SEO.",
      tags: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Bento Grid"],
      liveUrl: "#",
      githubUrl: "https://github.com/lehoangthuan4568",
      featured: true,
      accentColor: "from-sky-500 to-blue-600"
    },
    {
      id: "laztar-peep-report",
      title: "Hệ Thống Báo Cáo PEEP (Tuần 1 - LAZTAR)",
      description:
        "Trang blog/báo cáo học tập PEEP xây dựng trên nền tảng Static Site Generator (Hugo), quản lý tài liệu Markdown, tự động build & deploy qua Git workflow tại LAZTAR.",
      tags: ["Hugo", "Markdown", "Git & GitHub", "Static Site", "LAZTAR PEEP"],
      liveUrl: "https://github.com/lehoangthuan4568/LAZTAR-PEEP-2026-Thuan",
      githubUrl: "https://github.com/lehoangthuan4568/LAZTAR-PEEP-2026-Thuan",
      featured: true,
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      id: "modern-react-components",
      title: "Thực Hành Component & State Management",
      description:
        "Tập hợp các bài tập thực hành giao diện với React và Next.js: Form tương tác, Dark/Light Mode, Card sản phẩm, Navigation Drawer và tối ưu hóa Render.",
      tags: ["React", "Custom Hooks", "State Management", "Flexbox/Grid"],
      liveUrl: "#",
      githubUrl: "https://github.com/lehoangthuan4568",
      featured: false,
      accentColor: "from-purple-500 to-indigo-600"
    }
  ] as Project[],

  navigation: [
    { name: "Giới thiệu", href: "#about" },
    { name: "Dự án", href: "#projects" },
    { name: "Hiện tại", href: "#now" },
    { name: "Liên hệ", href: "#contact" }
  ]
};
