import React from 'react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const pixoByteAreas = [
    { name: 'Brand Identity Design', highlight: false },
    { name: 'Artwork', highlight: false },
    { name: 'Mockup Design', highlight: false },
    { name: 'Calligraphy', highlight: 'tertiary' },
    { name: 'Banners and Posters', highlight: false },
    { name: 'UX/UI Design', highlight: 'primary' },
    { name: 'Magazine Design', highlight: false },
  ];

  return (
    <section id="experience" className="w-full bg-[#131313] py-20 scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">work_history</span>
            <span>FIELD TRAJECTORY</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
            PROFESSIONAL EXPERIENCE
          </h2>
          <p className="text-sm md:text-base text-[#ac8883] mt-1 max-w-2xl">
            Professional responsibilities, entrepreneurial initiatives, and organizational contributions.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Card 1: Student Tutor (ST) */}
          <div className="p-6 md:p-10 rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-xl transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#353534]">
              <div className="flex items-center gap-4">
                <div className="h-16 px-4 py-2 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src={PORTFOLIO_IMAGES.logos.bbsExp}
                    alt="BRAC Business School Logo"
                    className="h-11 w-auto max-w-[140px] object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/30 border border-[#da291c]/60 text-[#ffb4a8] text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                      CURRENT POSITION
                    </span>
                    <span className="text-xs text-[#ac8883]">October 2026 – Present</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#e5e2e1] font-bold tracking-tight">
                    Student Tutor (ST)
                  </h3>
                  <div className="text-base text-[#ffb4a8] font-semibold mt-0.5">
                    BRAC Business School, BRAC University
                  </div>
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-lg bg-[#353534] border border-[#353534] text-[#e6bdb7] text-[11px] font-semibold self-start lg:self-auto shrink-0 uppercase tracking-wider">
                Academic Appointment • 15 Hrs/Wk
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#da291c]"></span>
                <span>KEY RESPONSIBILITIES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Assist and support faculty members with academic activities.',
                  'Weekly contribution to supporting academic activities of BRAC Business School.',
                  'Contribute weekly hours in desk duty.',
                  'Conduct weekly tutorial sessions offered by BRAC Business School.',
                ].map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#201f1f]/80 border border-[#353534]/60"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: PixoByte Graphics */}
          <div className="p-6 md:p-10 rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-xl transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#353534]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#201f1f] border border-[#353534] flex items-center justify-center shrink-0 shadow-md p-2">
                  <img
                    src={PORTFOLIO_IMAGES.logos.pixobyte}
                    alt="PixoByte Graphics Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#353534] text-[#e6bdb7] text-[11px] uppercase tracking-wider font-semibold">
                      Startup Venture
                    </span>
                    <span className="text-xs text-[#ac8883]">2020 – 2023</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#e5e2e1] font-bold tracking-tight">
                    Co-Founder
                  </h3>
                  <div className="text-base text-[#ffb4a8] font-semibold mt-0.5">
                    PixoByte Graphics
                  </div>
                </div>
              </div>

              {/* Social and Portfolio Links */}
              <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
                <a
                  href="https://behance.net/tasnimishraque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#201f1f] border border-[#353534] hover:border-[#da291c] hover:bg-[#2a2a2a] text-[#e5e2e1] transition-all text-xs font-semibold group cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-[#ffb4a8] group-hover:text-[#da291c] transition-colors" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.037 0-5.5-2.274-5.5-5.5s2.463-5.5 5.5-5.5c3.098 0 5.093 2.146 5.093 5.432 0 .391-.044.821-.073 1.068h-7.989c.123 1.637 1.488 2.651 3.094 2.651 1.464 0 2.451-.628 2.92-1.651h1.681zm-2.036-3.151c-.139-1.28-1.127-2.083-2.655-2.083-1.42 0-2.451.815-2.716 2.083h5.371zm-13.69-7.849h5.176c2.459 0 4.174 1.134 4.174 3.197 0 1.341-.758 2.37-1.996 2.828 1.674.453 2.62 1.696 2.62 3.399 0 2.434-1.954 3.576-4.57 3.576h-5.404v-13zm2.593 4.981h2.247c1.191 0 1.948-.488 1.948-1.503 0-.961-.723-1.453-1.895-1.453h-2.3v2.956zm0 5.994h2.469c1.371 0 2.193-.578 2.193-1.748 0-1.121-.861-1.688-2.143-1.688h-2.519v3.436z"></path>
                  </svg>
                  <span>VIEW BEHANCE PORTFOLIO</span>
                </a>
                <a
                  href="https://instagram.com/pixobyte.graphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#201f1f] border border-[#353534] hover:border-[#da291c] hover:bg-[#2a2a2a] text-[#e5e2e1] transition-all text-xs font-semibold group cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-[#ffb4a8] group-hover:text-[#da291c] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                  <span>VISIT INSTAGRAM</span>
                </a>
              </div>
            </div>

            {/* Key Areas */}
            <div className="mt-6">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#da291c]"></span>
                <span>KEY AREAS</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {pixoByteAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                      area.highlight === 'primary'
                        ? 'bg-[#920703]/25 border-[#da291c]/80 text-[#ffdad4]'
                        : area.highlight === 'tertiary'
                        ? 'bg-[#201f1f] border-[#353534] text-[#dfc700]'
                        : 'bg-[#201f1f] border-[#353534] text-[#e5e2e1] hover:border-[#da291c]'
                    }`}
                  >
                    {area.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities & Contributions */}
            <div className="mt-6">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#da291c]"></span>
                <span>RESPONSIBILITIES &amp; CONTRIBUTIONS</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Co-founded and managed an online graphic-design venture.',
                  'Oversaw finance, operations, and business development.',
                  'Coordinated domestic and international clients.',
                  'Contributed to organizational growth.',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#201f1f]/80 border border-[#353534]/60"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
