"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
              begum's portfolio
            </div>
            <div className="hidden sm:flex space-x-8">
              <a href="#about" className="text-xl hover:text-accent/70 transition-colors">about</a>
              <a href="#education-experience" className="text-xl hover:text-accent/70 transition-colors">experience</a>
              <a href="#contact" className="text-xl hover:text-accent/70 transition-colors">contact</a>
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
            <h2 className="text-3xl font-bold mb-8">about me</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <p className="text-lg text-foreground/80">
                  hi, i'm begüm zengin! i’m a passionate frontend developer with a strong focus on building scalable, efficient, and user-friendly web applications.
                </p>
                <p className="text-lg">
                with hands-on experience in angular, react, and modern frontend technologies, i enjoy turning complex requirements into intuitive and responsive interfaces.
                </p>
                <p className="text-lg text-foreground/80">
                i thrive in collaborative environments, enjoy problem-solving, and continuously seek opportunities to learn and adapt to new technologies.
                </p>
              </div>
              <div className="relative h-[400px] w-[400px] mx-auto">
                photo
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
            <h2 className="text-3xl font-bold mb-12">experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
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
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-xl">baskent university</h3>
                        <div className="relative cursor-pointer" onMouseEnter={() => {
                          const modal = document.getElementById('gallery-modal');
                          const modalContent = modal?.querySelector('.bg-background\\95');
                          const images = modal?.querySelectorAll('.transform');
                          
                          if (modal) {
                            modal.style.display = 'flex';
                            setTimeout(() => {
                              modal.style.opacity = '1';
                              if (modalContent) modalContent.classList.add('scale-100');
                              
                              images?.forEach((img, index) => {
                                setTimeout(() => {
                                  (img as HTMLElement).style.opacity = '1';
                                  (img as HTMLElement).style.transform = `translateY(0) rotate(${Math.random() * 10 - 5}deg)`;
                                }, index * 150);
                              });
                            }, 50);
                          }
                        }}>
                          <Image
                            src="/images/gallery.png"
                            alt="Gallery icon"
                            width={24}
                            height={24}
                          />
                          <div id="gallery-modal" 
                              className="fixed inset-0 bg-black/50 hidden items-center justify-center z-[9999] transition-opacity duration-300 opacity-0"
                              onClick={() => {
                                const modal = document.getElementById('gallery-modal');
                                if (modal) {
                                  modal.style.opacity = '0';
                                  setTimeout(() => {
                                    modal.style.display = 'none';
                                  }, 300);
                                }
                              }}
                              style={{ backdropFilter: 'blur(5px)' }}>
                            <div className="relative bg-background/95 p-8 transform transition-all duration-500 scale-0" 
                                 onClick={(e) => e.stopPropagation()}>
                              <div className="flex gap-8 p-4">
                                <div className="relative transform transition-all duration-500 opacity-0 translate-y-full rotate-0 hover:scale-105">
                                  <Image
                                    src="/images/eng_faculty.jpg"
                                    alt="Gallery image 1"
                                    width={300}
                                    height={300}
                                    className="shadow-lg rounded-lg"
                                  />
                                  <p className="text-center mt-4 text-sm text-foreground/80">me thriving @ baskent university engineering faculty</p>
                                </div>
                                <div className="relative transform transition-all duration-500 opacity-0 translate-y-full rotate-0 hover:scale-105">
                                  <Image
                                    src="/images/parsybot.jpg"
                                    alt="Gallery image 2"
                                    width={300}
                                    height={300}
                                    className="shadow-lg rounded-lg"
                                  />
                                  <p className="text-center mt-4 text-sm text-foreground/80">presenting parsybot @ the graduation projects fair</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="flex mb-4">
                        <p className="text-foreground/80 text-md">i graduated with a <b>bachelor of science in computer engineering</b> in 2023</p>
                      </span>
                      <div className="ml-4 pl-4 mt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Image
                            src="/images/star_bullet.png"
                            alt="Star bullet"
                            width={16}
                            height={16}
                          />
                          <h4 className="font-semibold text-lg">graduation project</h4>
                        </div>
                        <p className="text-foreground/80 mb-4 text-justify">
                          <span>i led the frontend development of the senior project "parsybot: virtual university assistant", an intelligent chatbot funded by the </span>
                          <span className="inline-block px-3 py-1 rounded-md frosted-glass text-sm relative group cursor-help">
                            <span>TÜBİTAK 2209-A university students research projects support program</span>
                            <span className="invisible text-justify group-hover:visible absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-80 p-4 rounded-md bg-[#282521]  z-[100] text-sm shadow-lg">
                              TÜBİTAK 2209-A is a funding program by the scientific and technological research council of türkiye (TÜBİTAK) aimed at supporting undergraduate students in conducting scientific research projects.
                              the program encourages students to develop research skills, contribute to their fields, and gain hands-on experience in scientific studies.
                              it provides financial support to eligible projects, helping students enhance their academic and professional competencies.
                            </span>
                          </span>
                        </p>

                        <p className="text-foreground/80 mb-6 text-justify">
                          <span>parsybot was presented and its findings were published at the </span>
                          <span className="inline-block px-3 py-1 rounded-md frosted-glass text-sm relative group cursor-help">
                            <span>18th international conference on semantic computing (ICSC'18)</span>
                            <span className="invisible text-justify group-hover:visible absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-80 p-4 rounded-md bg-[#282521] z-[100] text-sm shadow-lg">
                              ICSC is a premier international forum for researchers and practitioners to present updated research findings, share innovative experiences and discuss trending technologies in semantic computing, an emerging paradigm that comprises techniques and technologies for computing with words and expressions of natural languages.
                            </span>
                          </span>
                          <span>, showcasing innovation, technical expertise, and real-world impact.</span>
                        </p>
                        <div className="flex gap-6 mt-2">
                          <a href="https://ieeexplore.ieee.org/document/10475599" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm9 17.1L12 22.5 3 17.1V6.9L12 1.5l9 5.4v10.2zM12 15c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z"/>
                            </svg>
                            <span>IEEE publication</span>
                          </a>
                          <a href="https://github.com/begumzengin/ParsyBot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                            <span>github repository</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8">experience</h3>
                <div className="bg-background/5 rounded-md p-6">
                  <h3 className="font-semibold text-xl mb-2">frontend developer</h3>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-justify">
                    <li>i've been working as a frontend developer since august 2023, building and optimizing web applications.</li>
                    <li>i'm developing web apps for erp projects, focusing on creating efficient and user-friendly solutions.</li>
                    <li>i'm taking the lead role in the b2b module, making sure everything runs smoothly, from frontend components to backend integration.</li>
                    <li>i'm deeply involved in state management, optimizing performance, and ensuring seamless communication between frontend and rest apis.</li>
                    <li>i'm working closely with different teams to maintain a smooth development flow and deliver scalable, maintainable solutions.</li>
                  </ul>
                </div>
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
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
