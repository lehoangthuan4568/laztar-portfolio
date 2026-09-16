import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Now from "@/components/Now";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Now />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
