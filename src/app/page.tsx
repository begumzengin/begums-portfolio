'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import EChart, { experienceChartOption } from "@/components/EChart";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedSection, setSelectedSection] = useState<'education' | 'experience' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const experienceSection = document.getElementById('education-experience');
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          setSelectedSection(null);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-foreground relative overflow-hidden">
      {/* Animated Blob */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1] animated-blob"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Navbar */}
      <nav className="sticky section-navbar top-0 z-50 dark:border-white/[.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            <div className="text-2xl font-catellos mr-20 text-foreground">
              begüm zengin
            </div>
            <div className="hidden sm:flex space-x-8">
              <a href="#about" className="text-xl transition-all duration-300 ease-in-out transform hover:scale-105">about</a>
              <a href="#education-experience" className="text-xl transition-all duration-300 ease-in-out transform hover:scale-105">experience</a>
              <a href="#contact" className="text-xl transition-all duration-300 ease-in-out transform hover:scale-105">contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <main className="flex-1">
        <section id="about" className="section-primary flex items-center px-4 sm:px-6 lg:px-8 relative min-h-screen">
        <div className="absolute bottom-8 right-8 flex gap-2">
          <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
              aria-label="Scroll to top"
              data-tooltip="back to top"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('education-experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
              aria-label="Scroll to next section"
              data-tooltip="experience"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <h2 className="text-3xl font-bold mb-8">about me</h2>
                <div className="space-y-4 text-justify">
                  <p className="text-lg text-foreground/80">
                    hi, i'm begüm zengin! i’m a passionate frontend developer with a strong focus on building efficient and user-friendly web applications.
                  </p>
                  <p className="text-lg">
                  with hands-on experience in angular, react, and modern frontend technologies, i enjoy turning complex requirements into intuitive and responsive interfaces.
                  </p>
                  <p className="text-lg">
                  i'm fascinated by design and aspire to create amazing user interface designs.
                  </p>
                  <p className="text-lg">
                  i thrive in collaborative environments, enjoy problem-solving, and continuously seek opportunities to learn and adapt to new technologies.
                  </p>
                </div>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="education-experience" className="section-accent py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
            <div className="absolute bottom-8 right-8 flex gap-2">
            <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
                aria-label="Scroll to about section"
                data-tooltip="about me"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
                aria-label="Scroll to contact section"
                data-tooltip="contact"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid md:grid-cols-3 gap-10 items-center">
                <div className="flex flex-col items-center gap-4 md:col-span-1">
                  <h2 className="text-3xl font-bold">experience</h2>
                  <p className="text-md text-foreground/80 text-justify">i've been working as a frontend developer since 2023</p>
                  <p className="text-lg font-catellos text-foreground/80 text-justify">&</p>
                  <p className="text-md text-foreground/80 text-justify">i love learning about new technologies and concepts</p>
                  <p className="text-md text-foreground/80 text-center">i'm contributing to man truck & bus and tarım kredi projects @ <a href="https://vbt.com.tr/" target="_blank" rel="noopener noreferrer" className="text-[#e670a1] hover:text-[#21D3EB] transition-colors">vbt software</a></p>
                </div>
                <div className="w-full h-[600px] md:col-span-2">
                  <EChart option={experienceChartOption} className="w-full"/>
                </div>
              </div>
            </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="section-secondary py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
        <div className="absolute bottom-8 right-8 flex gap-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
              aria-label="Scroll to top"
              data-tooltip="back to top"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">get in touch</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-foreground/80 mb-8 text-center">
                feel free to reach out if you’d like to collaborate, discuss exciting projects, or just chat about all things frontend!
              </p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:begumzengin1@gmail.com" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  e-mail
                </a>
                <a href="https://github.com/begumzengin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23 66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  github
                </a>
                <a href="https://linkedin.com/in/begumzengin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                  linkedin
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
