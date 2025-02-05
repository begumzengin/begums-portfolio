"use client"

import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#292521] text-foreground">
      {/* Navbar */}
      <nav className="sticky section-navbar top-0 z-50 backdrop-blur-sm border-b border-black/[.08] dark:border-white/[.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            <div className="text-2xl font-catellos mr-20 text-foreground">begum's portfolio</div>
            <div className="hidden sm:flex space-x-8">
              <a href="#about" className="text-xl hover:text-accent/70 transition-colors">about</a>
              <a href="#education-experience" className="text-xl hover:text-accent/70 transition-colors">education & experience</a>
              <a href="#contact" className="text-xl hover:text-accent/70 transition-colors">contact</a>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 hover:bg-foreground/5 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="sm:hidden absolute top-14 inset-x-0 p-2 bg-[#292521] border-b border-[#FFEDE1]/[.08]">
              <div className="flex flex-col space-y-4 p-4">
                <a
                  href="#about"
                  className="hover:text-foreground/70 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  about
                </a>
                <a
                  href="#education-experience"
                  className="hover:text-foreground/70 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  education & experience
                </a>
                <a
                  href="#contact"
                  className="hover:text-foreground/70 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">
        {/* About Section */}
        <section id="about" className="section-primary flex items-center px-4 sm:px-6 lg:px-8 scroll-section relative">
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
              data-tooltip="education & experience"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-3xl font-bold mb-8">about me</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <p className="text-lg text-foreground/80">
                  Hi, I'm Begüm Zengin! I’m a passionate Frontend Developer with a strong focus on building scalable, efficient, and user-friendly web applications.
                </p>
                <p className="text-lg">
                With hands-on experience in Angular, React, and modern frontend technologies, I enjoy turning complex requirements into intuitive and responsive interfaces.
                </p>
                <p className="text-lg text-foreground/80">
                I thrive in collaborative environments, enjoy problem-solving, and continuously seek opportunities to learn and adapt to new technologies.
                </p>
              </div>
              <div className="relative h-[400px] w-[400px] mx-auto">
                <Image
                  src="/images/about_me.png"
                  alt="Profile"
                  priority
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section id="education-experience" className="section-accent py-20 px-4 sm:px-6 lg:px-8 scroll-section relative">
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
              aria-label="Scroll to previous section"
              data-tooltip="about me"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
              aria-label="Scroll to next section"
              data-tooltip="contact"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">education & experience</h2>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">education</h3>
              <div className="bg-background/5 rounded-md p-6 space-y-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/star_bullet.png"
                    alt="Star bullet"
                    width={16}
                    height={16}
                    className="mt-1"
                  />
                  <div>
                    <p className="text-foreground/70 mb-2">2019-2023</p>
                    <h3 className="font-semibold text-xl mb-2">Baskent University</h3>
                    <p className="text-foreground/80">Bachelor of Science in Computer Engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/star_bullet.png"
                    alt="Star bullet"
                    width={16}
                    height={16}
                    className="mt-1"
                  />
                  <div>
                    <p className="text-foreground/70 mb-2">2023</p>
                    <h3 className="font-semibold text-xl mb-2">Graduation Project</h3>
                    <p className="text-foreground/80">I led the frontend development of the senior project "ParsyBot: Virtual University Assistant", an intelligent chatbot funded by the TÜBİTAK University Students Research Projects Support Program.</p>
                    <p className="text-foreground/80">The project was presented and its findings were published at the 18th International Conference on Semantic Computing (ICSC'18), showcasing innovation, technical expertise, and real-world impact.</p>
                    <div className="flex gap-4 mt-4">
                      <a href="https://ieeexplore.ieee.org/document/10475599" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm9 17.1L12 22.5 3 17.1V6.9L12 1.5l9 5.4v10.2zM12 15c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z"/>
                          </svg>
                          <span>IEEE publication</span>
                        </a>
                        <a href="https://github.com/begumzengin/ParsyBot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>github repository</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">experience</h3>
              <div className="rounded-md p-6">
                <h3 className="font-semibold text-xl mb-2">Frontend Developer</h3>
                <p className="text-foreground/70">VBT Yazılım - Ankara, Turkey</p>
                <p className="text-foreground/70">August 2023 - Present</p>
                <ul className="mt-4 list-disc list-inside space-y-2">
                  <li>I contributed to the development of web applications using Angular, NgRx, Nx Workspace, and PrimeNG, focusing on building modular and scalable UI components.</li>
                  <li>I worked extensively on state management, frontend-backend integration with REST APIs, and optimizing application performance.</li>
                  <li>I collaborated with cross-functional teams to ensure smooth development workflows and maintainability.</li>
                </ul>
              </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-secondary py-20 px-4 sm:px-6 lg:px-8 scroll-section relative">
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
